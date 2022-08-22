var express = require("express");
var router = express.Router();
let userName = require("../data/userNames");
const bodyParser = require("body-parser");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(userName);
});

router.post("/", function (req, res, next) {
  res.send(console.log(req.body));
});

module.exports = router;
