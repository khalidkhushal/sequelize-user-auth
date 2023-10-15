const { Router } = require("express");
const userService = require("../../services/user/user.service");
const { apiRes } = require("../../utils/apiHelpers");
const userRouter = Router();
const { apiError } = require("../../utils/error");

userRouter.post("/register", [], async (req, res, next) => {
  try {
    const { name, phone_number } = req.body;
    const result = await userService.register({ name, phone_number});
    apiRes(res, result);
  } catch (err) {
    apiError(res, err, 400, next);
  }
});

userRouter.post("/generateOTP", [], async (req, res, next) => {
  try {
    const phone_number = req.body.phone_number
    const result = await userService.generateOTP(phone_number);
    apiRes(res, result);
  } catch (err) {
    apiError(res, err, 400, next);
  }
});

userRouter.get("/:user_id/verifyOTP", [], async (req, res, next) => {
  try {
    const id = req.params.user_id
    const otp = req.query.otp
    const result = await userService.verifyOTP(id, otp);
    apiRes(res, result);
  } catch (err) {
    apiError(res, err, 400, next);
  }
});

module.exports = userRouter;
