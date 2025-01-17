var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("form", { title: "Form" });
});

router.post("/new", (req, res, next) => {
  console.log(req.body.author, req.body.text);
  res.redirect("/");
  messages.push({
    text: req.body.text,
    user: req.body.author,
    added: new Date(),
  });
});

module.exports = router;
