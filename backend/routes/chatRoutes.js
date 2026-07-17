const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware.js");
const {
  accessChat,
  fetchChat,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatControllers.js");

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChat);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupAdd").put(protect, addToGroup);
router.route("/groupRemove").put(protect, removeFromGroup);

module.exports = router;
