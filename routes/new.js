var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.render("form", { title: "Form" });
});

router.post("/", (req, res, next) => {
  console.log(req.body.author, req.body.text);
  res.redirect("/new");
});

module.exports = router;
