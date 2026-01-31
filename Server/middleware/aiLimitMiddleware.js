const AIUsage = require("../models/AIUsageModel.js");
const SubcriptionModel = require("../models/SubcriptionModel.js");
const Subscription = require("../models/SubcriptionModel.js");

module.exports = async function (req, res, next) {
    const subscription = await Subscription.findOne({user: req.user.id})

    // paid users are unlimited 
    if(subscription && subscription.plam !== "free"){
        return next();
    }

    // Free users are limited 
    const today = new Date.setHours(0,0,0,0);
    let usage = await AIUsage.findOne({
        user: req.user.id,
        date: {$gte: today}
    });

    if(!usage){
        usage = await AIUsage.create({user: req.user.id})
    }
    
    if(usage.count >= 5){
        return res.status(403).json({
            message: "You have reached you free Limit, Upgrade to continue"
        });
    }
    usage.count += 1;
    await usage.save()

    next();
}