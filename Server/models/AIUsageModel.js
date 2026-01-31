const mongoose = require("mongoose");

const aiUsageSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    date:{
        type: Date,
        default: Date.now
    },
    count:{
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("AIUsage", aiUsageSchema)