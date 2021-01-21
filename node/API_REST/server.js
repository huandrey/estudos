import app from './app';

const port = 5001;
app.listen(port, () => {
  console.log(`App in running in port http://localhost:${port}`);
});
