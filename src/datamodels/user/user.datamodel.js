const BaseDataModel = require("../base.datamodel");

class UserDataModel extends BaseDataModel {
    name = undefined
    otp = undefined
    otp_expiration_date = undefined
    phone_number = undefined
}

module.exports = UserDataModel;