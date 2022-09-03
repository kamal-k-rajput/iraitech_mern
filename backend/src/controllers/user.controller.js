const UserModel = require("../models/user.model");

const express = require("express");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.use(express.json());
//get profile details
router.get("/profile", authenticate, async (req, res) => {
  try {
    console.log(req.userID, "userid");
    let user = await UserModel.findOne({ _id: req.userID }, { _id: 0 })
      .lean()
      .exec();

    return res.status(200).send({ user: user });
  } catch (err) {
    return res.status(500).send({ status: "failed", err });
  }
});

module.exports = router;
