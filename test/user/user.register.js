const assert = require("assert");
const userService = require("../../src/services/user/user.service");
const { userRegisterRes } = require("../responses/user.register");

describe('Register', () => {

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

  });