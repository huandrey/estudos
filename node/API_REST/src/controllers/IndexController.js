import Aluno from '../models/Aluno';

module.exports = {
  home: async (req, res) => {
    try {
      const student = await Aluno.create(req.body);

      res.send({ student });
    } catch (e) {
      console.log(e);
      res.status(401).send({ error: 'Algum erro!' });
    }
  },
};
