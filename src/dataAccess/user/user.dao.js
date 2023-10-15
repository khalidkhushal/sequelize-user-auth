const userDataModel = require("../../datamodels/user/user.datamodel");
const userModel = require("../../models/user/user.model");
const BaseDAO = require("../BaseDAO");

class UserDAO extends BaseDAO {
// class UserDAO  {

  model = null;

  constructor(data) {
    super({ model: data.model, dataModel: data.dataModel });
    this.model = data.model;
  }

  async findByName(name) {
    const user = await this.model.find({ name });
    return user[0];
  }

  async findByPhoneNumber(phone_number) {
    const user = await this.model.findAll({ where: {phone_number} });
    return user[0];
  }


}

const userDAO = new UserDAO({ model: userModel, dataModel: userDataModel });
module.exports = userDAO;
