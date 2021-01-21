require('dotenv').config();

// server config
const express = require('express');
const app = express();

// database config
// mongoose retorna uma promisse, por isso usamos o then e catch
// acionamos um evento para que a api ouca as portas apenas quando o db estiver pronto
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('connection completed')
    app.emit('ok')
  })
  .catch(e => new Error(e))

// sessao para salvar cookies de usuario
const session = require('express-session');
// armazena as sessoes no atlas mongodb
const MongoStore = require('connect-mongo')(session);
// mensagens instantaneas (msg de erro, feedback, etc) 
// so funciona com as sessoes instaladas e configuradas
const flashMessage = require('connect-flash');

const routes = require('./routes');
const path = require('path');
// recomendacao do express
const helmet = require('helmet');
// seguranca de formularios (csrf tokens)
// evita que sites externos postem conteudo (maliciosos) na nossa aplicacao
const csrf = require('csurf');

// nossas importacoes de middlewares
const { middlewareGlobal, checkCSRF, CSRFMiddleware } = require('./src/middlewares/middlewares');

app.use(helmet());

// permite utilizar formulario na nossas aplicacao
app.use(express.urlencoded({ extended: true }));

app.use(express.json())

// configura os arquivos estaticos da nossa api
app.use(express.static(path.resolve(__dirname, 'public')));


const sessionOptions = session({
  secret: 'treze',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 3600 * 24,
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flashMessage());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
// Nossos middlewares
app.use(middlewareGlobal)
app.use(checkCSRF);
app.use(CSRFMiddleware);
app.use(routes);


app.on('ok', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  })
});

