const express = require("express");
const router = express.Router();
const { create } = require("../controllers/category");
const { adminMiddleware, requireSignin } = require("../controllers/auth");
const { runValidation } = require("../validators");
const { categoryCreateValidator } = require("../validators/category");

router.post(
  "/category",
  categoryCreateValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);

module.exports = router;
