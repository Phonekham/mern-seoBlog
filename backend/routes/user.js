const express = require("express");
const router = express.Router();
const { authMiddleware, requireSignin } = require("../controllers/auth");
const { read } = require("../controllers/user");

router.get("/profile", requireSignin, authMiddleware, read);

module.exports = router;
