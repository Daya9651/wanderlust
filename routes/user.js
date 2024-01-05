const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");

const userController = require("../controllers/users.js")

router
.route("/signup")
.get( userController.renderSignupForm)
.post( wrapAsync( userController.signUp))

// router.get("/signup", userController.renderSignupForm);
// router.post("/signup", wrapAsync( userController.signUp)
// );

router.route("/login")
    .get(userController.renderLoginForm)
    .post(
    passport.authenticate("local", { 
    failureRedirect: '/login', 
    failureFlash: true,
    }),
    userController.login
    );


// router.get("/login", userController.renderLoginForm);

// router.post("/login",
// passport.authenticate("local", { 
//     failureRedirect: '/login', 
//     failureFlash: true,
//    }),
//     userController.login
// );

router.get("/logout", userController.logout)

module.exports = router;