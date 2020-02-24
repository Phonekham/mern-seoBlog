const User = require("../models/user");
const shortid = require("shortid");

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: "Email is taken"
      });
    }

    const { name, email, password } = req.body;
    let username = shortid.generate();
    let profile = `${process.env.CLIENT_URL}/profile/${username}`;

    let newUser = new User({ name, email, password, profile, username });
    newUser.save((err, succuss) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }
      // res.json({
      //   user: succuss
      // });
      res.json({
        message: "Sign up success! Please signin"
      });
    });
  });
};
