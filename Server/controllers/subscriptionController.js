const Subscription = require("../models/Subscription");

exports.activateSubscription = async (userId, plan) => {
  const expires = new Date();
  expires.setMonth(expires.getMonth() + 1);

  await Subscription.findOneAndUpdate(
    { user: userId },
    {
      plan,
      isActive: true,
      startedAt: new Date(),
      expiresAt: expires
    },
    { upsert: true }
  );
};
