const express = require("express");
const router = express.Router();
const { signup, signin, signout, googleLogin } = require("../controllers/auth");

// Validators
const { runValidation } = require("../validators");
const {
  userSignupValidator,
  userSigninValidator
} = require("../validators/auth");

router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/signin", userSigninValidator, runValidation, signin);
router.get("/signout", signout);
router.post("/google-login", googleLogin);

// router.get("/secret", requireSignin, (req, res) => {
//   res.json({
//     user: req.user
//   });
// });

module.exports = router;
