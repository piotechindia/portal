const isAuthenticated = require('../middleware/isAuthenticated.js')
const {singleUpload} = require('../middleware/multer.js')
const express = require('express')
const {login, logout, signup, updateProfile, sendotp, changePassword} = require('../controller/user.controller.js')
const {resetPassword, resetPasswordToken} = require("../controller/resettoken.controller.js")
 
const router = express.Router();

router.route("/register").post(singleUpload,signup);
router.route("/login").post(login);
router.route("/otp").post(sendotp)
router.post("/reset-password-token", resetPasswordToken)
// Route for resetting user's password after verification
router.post("/reset-password", resetPassword)
// router.route("/logout").get(logout);
// router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);

module.exports =  router;
