const mongoose = require("mongoose");
const crypto = require("crypto");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      maxLength: 32,
      unique: true,
      index: true,
      lowercase: true
    },
    name: {
      type: String,
      trim: true,
      required: true,
      max: 32
    },
    email: {
      type: String,
      trim: true,
      required: true,
      max: 32,
      unique: true,
      lowercase: true
    },
    profile: {
      type: String,
      required: true
    },
    hashed_password: {
      type: String,
      required: true
    },
    salt: String,
    about: {
      type: String
    },
    role: {
      type: Number,
      default: 0
    },
    photo: {
      data: Buffer,
      contentType: String
    },
    resetPasswordLink: {
      data: String,
      default: ""
    }
  },
  { timestamp: true }
);

userSchema
  .virtual("password")
  .set(function(password) {
    // Create a temporary variable called_password
    this._password = password;
    // Generate salt
    this.salt = this.makeSalt();
    // Encrypt Password
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

userSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function(password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },

  makeSalt: function() {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  }
};

module.exports = mongoose.model("User", userSchema);
