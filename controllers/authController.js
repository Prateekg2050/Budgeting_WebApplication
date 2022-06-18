import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
import AppError from "../utils/appError.js";
// import sendEmail from "../utils/email.js";
// import crypto from "crypto";

// helper function
const createAndSendToken = (user, statusCode, res) => {
  res.status(statusCode).json({
    status: "success",
    token: generateToken(user._id),
    data: {
      user: user,
    },
  });
};

// @desc        Register new user
// @route       POST /user/register
// @access      Public
const registerUser = asyncHandler(async (req, res, next) => {
  try {
    const user = await User.create({
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      phoneNumber: req.body.phoneNumber,
    });

    createAndSendToken(user, 201, res);
  } catch (error) {
    return next(new AppError(error, 404));
  }
});

// @desc        Login user
// @route       POST /user/login
// @access      Public
const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) check if email and password exists
  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }

  // 2) check if user exists and password is correct
  let user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  // fetching again to hide user password
  user = await User.findById(user._id);

  // 3) if everything ok , send token to client
  createAndSendToken(user, 200, res);
});

const updatePassword = asyncHandler(async (req, res, next) => {
  // 1) Get user from collection
  const user = await User.findById(req.user._id).select("+password");

  // 2) check if POSTed current password is correctPassword
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError("Your current password is wrong", 401));
  }

  // 3) If so, update password
  if (!req.body.password || !req.body.passwordConfirm) {
    return next(new AppError("Please enter new passwords", 400));
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;

  await user.save({ validateBeforeSave: false });

  // 4) Log in user, send JWT
  createAndSendToken(user, 200, res);
});

export { registerUser, loginUser, updatePassword };
