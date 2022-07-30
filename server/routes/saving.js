const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const Expense = require("../models/expense");
const jwt = require("jsonwebtoken");
const verifyAuth = require("../middlewares/auth");
const { json } = require("express");

router.get("/1", verifyAuth, async(req, res) => {
    // res.send(req.user);
    try {
        // const user=await User.findOne(req.user._id)
        // req.user._id
        const expenses = await Expense.find({ user: req.user._id,imp:3 });
        var exp=0;
        expenses.forEach(function (x) {
             exp += x.amt;
            console.log(x);
        });
        res.json({exp_red:exp});
      } catch (err) {
        console.log(err.message);
        res.status(500).send("Server error");
      }

  });


  router.get("/2", verifyAuth, async (req, res) => {
    try {
        // const user=await User.findOne(req.user._id)
        // req.user._id
        const expenses = await Expense.find({ user: req.user._id, $or: [ { imp:3 } ,{imp:2}] });
        var exp=0;
        expenses.forEach(function (x) {
             exp += x.amt;
            console.log(x);
        });
        res.json({exp_red:exp});
      } catch (err) {
        console.log(err.message);
        res.status(500).send("Server error");
      }
  });


  module.exports = router;