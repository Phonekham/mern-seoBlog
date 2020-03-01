const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { objectId } = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      min: 3,
      max: 160
    },
    slug: {
      type: String,
      unique: true,
      index: true
    },
    body: {
      type: {},
      trim: true,
      required: true,
      max: 2000000,
      min: 200
    },
    excerpt: {
      type: String,
      max: 1000
    },
    mtitle: {
      type: String
    },
    mdesc: {
      type: String
    },
    mtitle: {
      data: Buffer,
      contentType: String
    },
    categories: [{ type: objectId, ref: "Category", required: true }],
    tags: [{ type: objectId, ref: "Tag", required: true }],
    postedBy: {
      type: objectId,
      ref: "User"
    }
  },
  { timestamp: true }
);

module.exports = mongoose.model("Blog", blogSchema);
