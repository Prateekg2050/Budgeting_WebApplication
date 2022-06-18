import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import AppError from "../utils/appError.js";

// @desc        Get user profile
// @route       GET /users/profile
// @access      Private
const getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
    .select("-password")
    .populate("listings currentlyRenting wishlist");

  if (user) {
    res.json({
      status: "success",
      data: user,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc        Update user profile
// @route       PUT /users/profile
// @access      Private
const updateUserProfile = asyncHandler(async (req, res, next) => {
  const doc = await User.findByIdAndUpdate(req.user._id, req.body, {
    new: true,
  });

  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      doc,
    },
  });
});

// @desc        Delete me
// @route       PUT /users/profile
// @access      Private
const deleteMe = asyncHandler(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user._id, { active: false });
  res.status(204).json({ status: "success", message: "User deleted" });
});

export { getMe, updateUserProfile, deleteMe };
