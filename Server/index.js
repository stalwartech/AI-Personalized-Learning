const express = require("express");
const env = require("dotenv").config()
const cors = require("cors");
const ConnectDB = require("./config/db.js");

ConnectDB();

const app = express();
app.use(cors());
app.use(express.json());

// ROutes 
app.get("/", (req, res) =>{
    res.send("AI backend runnign smoothly")
})

// Start the server 
const port = process.env.PORT;
app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
})