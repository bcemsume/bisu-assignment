var express = require("express");
var router = express.Router();
const db = require("../models");

/* GET users listing. */
router.get("/", (req, res, next) => {
  db.orders
    .findAll()
    .then((orders) => {
      res.json({
        data: orders,
        message: "Succeeded",
        isSucceeded: true,
      });
    })
    .catch(function (err) {
      res.send({
        message: err.message,
        isSucceeded: false,
      });
    });
});

module.exports = router;
