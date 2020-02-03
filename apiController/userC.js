const express = require("express");
const db = require("../db/db");

const User = require("../models/user");
const router = express.Router();

router.get("/", (req, res, next) => {
  db.query(User.getAllUsers(), (err, data) => {
    if (!err) {
      res.status(200).json({
        message: "User listed.",
        data: data
      });
    }
  });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  db.query(User.getUserDetails(id), (err, data) => {
    if (!err) {
      res.status(200).json({
        message: "User listed.",
        data: data
      });
    }
  });
});

router.post("/delete", (req, res, next) => {
  const id = req.body.id;

  // const userInstance=new User(id)
  db.query(User.deleteUser(id), (err, data) => {
    if (!err) {
      res.status(200).json({
        message: "User listed.",
        data: data
      });
    }
  });
});

router.post("/add", (req, res, next) => {
  //read product information from request
  let userInstance = new User(req.body.id, req.body.name);

  db.query(userInstance.addusers(), (err, data) => {
    res.status(200).json({
      message: "User added.",
      data: data
    });
  });
});

module.exports = router;
