const express = require("express");
const Router = express.Router();
const User = require ("../models/user.js");
const flash = require("connect-flash");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const userController = require("../controller/user.js")

Router
 .route("/signup")
 .get( userController.signUpFormRought)
 .post( wrapAsync(userController.signUpRought));


Router
 .route("/login")
 .get( userController.logInFormRought)
 .post( saveRedirectUrl, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), userController.logInRought);



Router.get("/logout", userController.logOutRought);

module.exports = Router;