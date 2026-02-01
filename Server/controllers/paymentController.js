
const axios = require("axios");

exports.initializePayment = async (req, res) => {
  const { amount } = req.body;

  const response = await axios.post(
    "https://api.paystack.co/transaction/initialize",
    {
      email: req.user.email,
      amount: amount * 100
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
      }
    }
  );

  res.json(response.data);
};
