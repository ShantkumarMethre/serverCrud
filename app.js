const bodyparser = require("body-parser");
const User = require("./apiController/userC");
const express = require("express");
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/users", User);

//if we are here then the specified request is not found
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

//all other requests are not implemented.
app.use((err, req, res, next) => {
  res.status(err.status || 501);
  res.json({
    error: {
      code: err.status || 501,
      message: err.message
    }
  });
});

module.exports = app;
