import User from '../models/User';

module.exports = {
  index: async (req, res) => {
    try {
      const users = await User.findAll();

      if (!users) {
        res.send({ errors: 'Users not found!' });
      }

      users.map((user) => user.password_hash = undefined);

      res.send({ users });
    } catch (e) {
      res.status(400).send({ errors: 'O' });
    }
  },
  create: async (req, res) => {
    try {
      const user = await User.create(req.body);

      user.password_hash = undefined;

      res.send({ user });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
      // console.log(`${e}ERRROO`);
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);

      if (!user) res.status(400).send({ error: 'User not found!' });

      user.password_hash = undefined;

      return res.send({ user });
    } catch (e) {
      res.status(400).send({ error: e });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;

    if (!id) { return res.status(400).send({ error: 'id not received' }); }

    const user = await User.findByPk(id);

    if (!user) { return res.status(400).send({ error: 'User not found!' }); }

    const upUser = await user.update(req.body);

    upUser.password_hash = undefined;

    return res.send({ user: upUser });
  },
  delete: async (req, res) => {
    const { id } = req.params;

    if (!id) { return res.status(400).send({ error: 'id not received' }); }

    const user = await User.findByPk(id);

    if (!user) { return res.status(400).send({ error: 'User not found!' }); }

    await user.destroy();

    return res.send({ sucess: 'User has been destroyed' });
  },
};
