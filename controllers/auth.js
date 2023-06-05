const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const User = require("../models/user");
const errorHandler = require("../utils/errorHandler");

module.exports.login = async (req, res) => {
  const candidate = await User.findOne({ email: req.body.email });

  if (candidate) {
    const passResult = bcrypt.compareSync(
      req.body.password,
      candidate.password
    );
    if (passResult) {
      const token = jwt.sign(
        {
          email: candidate.email,
          userId: candidate._id,
        },
        keys.jwt,
        { expiresIn: 60 * 60 }
      );
      res.status(200).json({ token: `Bearer ${token}` });
    } else res.status(401).json({ message: "Incorrect password" });
  } else res.status(404).json({ message: "Not found" });
};

module.exports.register = async (req, res) => {
  const candidate = await User.findOne({ email: req.body.email });

  if (candidate) {
    res.status(409).json({
      message: "This email already in use, try another",
    });
  } else {
    const salt = bcrypt.genSaltSync(10);
    const pass = req.body.password;
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(pass, salt),
    });
    try {
      user.save();
      res.status(201).json(user);
    } catch (e) {
      errorHandler(res, e);
    }
  }
};
