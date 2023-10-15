const { getTokens } = require("../../config/jwt");
const userDao = require("../../dataAccess/user/user.dao");
const { addMinutesInCurrentDate, extractData } = require("../../utils/common");
const { generateOTP } = require("../../utils/random");
const UserResponse = require("../user.service.response");

class UserService {
  dao = null;
  constructor(data) {
    this.dao = data.dao;
  }

  async register({ name, phone_number }) {
    const userId = await this.dao.create({ name, phone_number });
    let user = await this.dao.findById(userId);
    user = JSON.parse(JSON.stringify(user))
    const result = { token: getTokens(user.id, user.name), user:extractData(UserResponse, user) };
    return result;
  }

  async generateOTP(phone_number) {
    const user = await this.dao.findByPhoneNumber(phone_number);
    const otp = generateOTP(4)
    const otp_expiration_date = addMinutesInCurrentDate(5)
    let updated = await this.dao.update(user.id, {otp,otp_expiration_date});
    updated = JSON.parse(JSON.stringify(updated))
    return extractData(UserResponse, updated);
  }

  async verifyOTP(id, otp) {
    let user = await this.dao.findById(id);
    if(user && user.otp_expiration_date < Date.now()){
      throw new Error("OTP has been expired")
    } else if( user && user.otp != otp) {
      throw new Error("invalid OTP")
    }
    user = JSON.parse(JSON.stringify(user))
    return extractData(UserResponse, user);
  }

}

const userService = new UserService({ dao: userDao });
module.exports = userService;
