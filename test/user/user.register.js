const assert = require("assert");
const userService = require("../../src/services/user/user.service");
const { userRegisterRes } = require("../responses/user.register");
const UserResponse = require("../../src/services/user.service.response");

 describe('Register', () => {

    let userId = null
    let OTP = null

    it('should register a user', async () => {
      const result = await userService.register({name: "test", phone_number:"923456782345"})
      const expectedKeys = Object.keys(userRegisterRes)
      expectedKeys.forEach(key => {
        assert.ok(result.hasOwnProperty(key), `key ${key} not found`);
      })
    });

    it('should not register a user', async () => {
      try{
        const result = await userService.register({name: "test"})
      }catch(e) {
        assert.strictEqual(e.errors[0].type, 'notNull Violation');
      }
    });

    it('should not register a user', async () => {
      try{
        const result = await userService.register({phone_number: "923456782345"})
      }catch(e) {
        assert.strictEqual(e.errors[0].type, 'notNull Violation');
      }
    });

    it('should generate OTP and update user ', async () => {
      const phone_number = "923456782345"
      const result = await userService.generateOTP(phone_number)
      const expectedKeys = Object.keys(UserResponse)
      userId = result.id
      OTP = (await userService.dao.findById(userId)).otp
      expectedKeys.forEach(key => {
        assert.ok(result.hasOwnProperty(key), `key ${key} not found`);
      })
    });

    it('should verify OTP and return user', async () => {

      const result = await userService.verifyOTP(userId, OTP)
      const expectedKeys = Object.keys(UserResponse)
      expectedKeys.forEach(key => {
        assert.ok(result.hasOwnProperty(key), `key ${key} not found`);
      })

    });

  });