const express = require("express");
const router = express.Router();
const {
  accessChat,
  fetchChats,
  createGroupChat,
  addToGroup,
  removeFromGroup,
} = require("../controller/chatController.js");
const { protect } = require("../middleware/authMiddleware.js");

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, createGroupChat);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);
/* 
router.route("/").get(fetchChat);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, createGroupChat);
 */
module.exports = router;
