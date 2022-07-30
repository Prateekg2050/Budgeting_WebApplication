const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const Expense = require("../models/expense");
const jwt = require("jsonwebtoken");
const verifyAuth = require("../middlewares/auth");
const { json } = require("express");

router.post("/", verifyAuth, async (req, res) => {
  // res.send(req.user._id);

  try {
    // const user=await User.findOne(req.user._id)

    const newexpense = new Expense({
      title: req.body.title,
      amt: req.body.amt,
      date: Date(),
      imp: req.body.imp,
      user: req.user._id,
    });

    const exp = await newexpense.save();
    res.json(exp);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/", verifyAuth, async (req, res) => {
  // res.send(req.user._id);

  try {
    // const user=await User.findOne(req.user._id)
    // req.user._id
    const expenses = await Expense.find({ user: req.user._id });

    res.json(expenses);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

router.delete("/:id", verifyAuth, async (req, res) => {
  // res.send(req.user._id);

  try {
    const exp = await Expense.findById(req.params.id);
    // req.user._id
    // const expenses = await Expense.find({user:req.user._id});
    exp.remove();
    res.json({ msg: "Expense removed" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
