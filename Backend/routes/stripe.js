const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51MBxftSCXO0fQKAq3kj2mmPtBr1zMuiHRj2YQfOoSI27wA5cJVOzCT1yIQA2zqJfd6FazZxO0HEz9vXR2xxC7bWh002NJN8Bjt"
);

router.post("/payment", async (req, res) => {
  try {
    let response = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "inr",
      automatic_payment_methods: { enabled: true },
    });
    if (response) {
      return res.status(200).json({
        paymentIntent: response.client_secret,
      });
    } else {
      return res.status(500).json({ error: "There is an error" });
    }
  } catch (error) {
    console.log(`There is an error in payment method ${error}`);
    return res.status(500).json(error);
  }
});

module.exports = router;
