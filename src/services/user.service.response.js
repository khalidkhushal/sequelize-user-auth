const BaseDataModel = require("../datamodels/base.datamodel");

class UserResponse extends BaseDataModel {
    name = undefined
    phone_number = undefined
}

module.exports = UserResponse;