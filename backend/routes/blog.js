const express = require("express");
const router = express.Router();
const { adminMiddleware, requireSignin } = require("../controllers/auth");
const { create } = require("../controllers/blog.js");

router.post("/blog", requireSignin, adminMiddleware, create);

module.exports = router;
