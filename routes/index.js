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

/* post form to message board */
router.post("/new", (req, res, next) => {
  // console.log(req.body);
  if (req.body.user != "" && req.body.text != "") {
    messages.push({
      text: req.body.userMessage,
      user: req.body.user,
      added: new Date(),
    });
  }
  res.redirect("/");
});

module.exports = router;
