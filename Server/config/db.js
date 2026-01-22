const mongoose = require("mongoose");
const env = require("dotenv").config()
const ConnectDB = async () => {
    try {
        mongoose.connect(process.env.MongoDBURI);
        console.log("Database is connected")
    } catch (error) {
        console.log(error);
    }
}

module.exports = ConnectDB;