// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//   titule: 'Um titulo de testes',
//   age: 22,
//   name: 'huandrey'
// })
//   .then(data => console.log(data))
//   .catch(e => console.log(e))

exports.paginaInicial = (req, res) => {
  // console.log(req.session.user)
  res.render('index');
};

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de POST.');
};
