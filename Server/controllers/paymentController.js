const axios = require("axios");

exports.initializePayment = async (req, res) => {
  const { amount } = req.body;

  const response = await axios.post(
    "https://api.paystack.co/transaction/initialize",
    {
      email: req.user.email,
      amount: amount * 100 //The amount is in kobo so it will be converted to naira
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );

  res.json(response.data);
};
