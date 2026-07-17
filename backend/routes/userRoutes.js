const express = require("express");
const { protect } = require("../middlewares/authMiddleware.js");
const router = express.Router();
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers.js");

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/").get(protect, allUsers);

module.exports = router;
