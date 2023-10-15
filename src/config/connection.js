const {Sequelize} = require("sequelize");
const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB_NAME } = require("../utils/secret");

const sequelize = new Sequelize(MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;

