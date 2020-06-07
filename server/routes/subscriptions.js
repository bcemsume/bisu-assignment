var express = require("express");
var router = express.Router();
const db = require("../models");

/* GET users listing. */
router.get("/", (req, res, next) => {
  db.subscriptions
    .findAll()
    .then((subscriptions) => {
      res.json({
        data: subscriptions,
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

router.get("/getSubscriptionOrders/:id", async (req, res, next) => {
  const subscriptionId = req.params.id;
  const result = await db.orders.findAll({
    where: { subscriptionId: subscriptionId },
  });
  res.send(result);
});

module.exports = router;
