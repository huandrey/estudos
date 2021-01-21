import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      lastname: Sequelize.STRING,
      email: Sequelize.STRING,
      age: Sequelize.INTEGER,
      weigth: Sequelize.FLOAT,
      height: Sequelize.FLOAT,
    }, {
      sequelize,
    });
    return this;
  }
}
