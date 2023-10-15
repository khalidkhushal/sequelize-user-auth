const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

// Server
exports.PORT = process.env.PORT;

// Database
exports.MYSQL_USER = process.env.MYSQL_USER;
exports.MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
exports.MYSQL_DB_NAME = process.env.MYSQL_DB_NAME;

exports.SALT_ROUNDS = 10;

// JWT credentials
exports.JWT_ACCESS_TOKEN_SECRET = process.env.JWT_ACCESS_TOKEN_SECRET;
exports.JWT_ACCESS_TOKEN_EXPIRES = process.env.JWT_ACCESS_TOKEN_EXPIRES;
exports.JWT_REFRESH_TOKEN_SECRET = process.env.JWT_REFRESH_TOKEN_SECRET;
exports.JWT_REFRESH_TOKEN_EXPIRES = process.env.JWT_REFRESH_TOKEN_EXPIRES;