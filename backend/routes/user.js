const express = require("express");
const router = express.Router();
const { authMiddleware, requireSignin } = require("../controllers/auth");
const { read, publicProfile, update, photo } = require("../controllers/user");

router.get("/user/profile", requireSignin, authMiddleware, read);
router.get("/user/:username", publicProfile);
router.put("/user/update", requireSignin, authMiddleware, update);
router.get("/user/photo/:username", photo);

module.exports = router;
