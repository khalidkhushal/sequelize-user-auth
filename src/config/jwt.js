const jwt = require("jsonwebtoken");
const { addHoursInCurrentDate } = require("../utils/common");
const { JWT_ACCESS_TOKEN_SECRET, JWT_ACCESS_TOKEN_EXPIRES } = require("../utils/secret");
const moment = require("moment");

exports.getTokens = (userId, name) => {
  const accessExpiresIn = moment().add(JWT_ACCESS_TOKEN_EXPIRES, "hours");

  const payload = {
    userId,
    name
    };

  const accessToken = jwt.sign(payload, JWT_ACCESS_TOKEN_SECRET, { expiresIn: JWT_ACCESS_TOKEN_EXPIRES * 60 * 60 });

  return { accessToken, expiresIn: accessExpiresIn };
};
