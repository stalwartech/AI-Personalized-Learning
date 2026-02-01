const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    },
    plan:{
        type: String,
        enum:["free", "basic", "pro"],
        default: "free"
    },
    isActive:{
        type: Boolean,
        default: false
    },
    startedAt: Date,
    expiresAt: Date,
},
{timestamps: true}
)

module.exports = mongoose.model("Subsbription", subscriptionSchema)