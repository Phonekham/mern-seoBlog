const express = require("express");
const router = express.Router();
const { adminMiddleware, requireSignin } = require("../controllers/auth");
const {
  create,
  list,
  listAllBlogsCategoriesTags,
  read,
  remove,
  update
} = require("../controllers/blog.js");

router.post("/blog", requireSignin, adminMiddleware, create);
router.get("/blogs", list);
router.post("/blogs-categories-tags", listAllBlogsCategoriesTags);
router.get("/blog/:slug", read);
router.delete("/blog/:slug", adminMiddleware, requireSignin, remove);
router.put("/blog/:slug", adminMiddleware, requireSignin, update);

module.exports = router;
