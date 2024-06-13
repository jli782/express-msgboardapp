const express = require("express");
const router = express.Router();
// const ejsLint = require("ejs-lint");

const messages = require("../models/messages");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
});

/* To get a form to post to the messageboard */
router.get("/new", (req, res, next) => {
  res.render("form", { title: "Add a new message" });
});
module.exports = router;
