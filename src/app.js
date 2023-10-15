const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { PORT } = require("./utils/secret");
const { errorHandlerAll } = require("./utils/error");
const homeRouter = require("./controllers/home");
const userRouter = require("./controllers/user/user.router");

// express app initialize

const app = express();

// express app configurations

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.set("view engine", "ejs");
app.use(morgan("dev"));

// routes

app.use("/", homeRouter);
app.use("/users", userRouter);

// handle errors
app.use("*", errorHandlerAll);

app.all("*", (req, res) => { 
  res.status(404).json(`Route does not exist`); 
}); 

// initialize server at PORT

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT} `);
});
