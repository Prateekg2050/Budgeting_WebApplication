import express from "express";
const router = express.Router();

import {
  getMe,
  updateUserProfile,
  deleteMe,
} from "../controllers/userController.js";
import {
  loginUser,
  registerUser,
  updatePassword,
} from "../controllers/authController.js";

import { protect } from "../middleware/authMiddleware.js";

/********************************************************************************************/
/********************************************************************************************/

router.post("/register", registerUser);
router.post("/login", loginUser);

router.use(protect);

router.patch("/updateMyPassword", updatePassword);

//Do not use to update password
router.route("/me").get(getMe).patch(updateUserProfile).delete(deleteMe);

export default router;
