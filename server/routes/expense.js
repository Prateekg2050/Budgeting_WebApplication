const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const verifyAuth = require("../middlewares/auth");

router.get("/expense", (req, res) => {
    res.send(req.user);
  });
  