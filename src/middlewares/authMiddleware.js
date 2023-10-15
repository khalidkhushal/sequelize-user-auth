const jwt = require("jsonwebtoken");
const { apiError } = require("../utils/error");
const { JWT_ACCESS_TOKEN_SECRET } = require("../utils/secret");

exports.AuthMiddleware = (roles = []) => {
  return (req, res, next) => {
    try {
      if (!req.headers["authorization"]) throw new Error("UnAuthorized");

      const token = req.headers["authorization"].split("Bearer ").join("");

      jwt.verify(token, JWT_ACCESS_TOKEN_SECRET);
      req.user = jwt.decode(token)

      if(roles[0] && !roles.includes(req.user.role) ) throw new Error(`Required Roles are ${roles} has ${req.user.role}`)
      
      console.log("Authenticated!!");
      next();
    } catch (e) {
      apiError(res, e, 401, next);
    }
  };
};
