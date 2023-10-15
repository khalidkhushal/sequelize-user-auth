const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../../config/connection");

const userSchema =  { 
  id:{ 
      type: DataTypes.INTEGER, 
      autoIncrement:true, 
      primaryKey:true
  }, 
  name: { type: DataTypes.STRING, allowNull:false }, 
  phone_number: { type: DataTypes.STRING, allowNull:false }, 
  otp: { type: DataTypes.INTEGER},
  otp_expiration_date: { type: DataTypes.DATE},
  createdAt: DataTypes.DATE, 
  updatedAt: DataTypes.DATE, 
}


const userModel = sequelize.define("user", userSchema);
module.exports = userModel

sequelize.sync()