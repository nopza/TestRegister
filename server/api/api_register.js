const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();
const Users = require("../models/user_schema");

router.post("/register", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    const dataRecieve = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    };
    const account = await Users.create(dataRecieve);
    if (account) {
      res.json({ result: "success" });
    } else {
      res.json({ result: "failed" });
    }
  } catch (error) {
    res.json({ result: "failed", message: "internal error" });
    console.log(error);
  }
});

module.exports = router;
