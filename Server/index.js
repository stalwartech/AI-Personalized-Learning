const express = require("express");
const env = require("dotenv").config();
const cors = require("cors");
const ConnectDB = require("./config/db.js");
const authRoute = require("./routes/authRoutes.js");
const learningRoutes = require("./routes/learningRoutes.js");
const dashboardRoute = require("./routes/dashboardRoute.js");
const aiRoute = require("./routes/aiRoutes.js");
const progressRoute = require("./routes/progressRoute.js")
const exerciseRoute = require("./routes/exerciseRoute.js")

const app = express();
app.use(cors());
app.use(express.json()); 
// app.use(express.urlencoded({ extended: true }));

ConnectDB();
app.use("/auth", authRoute)
app.use("/api/learning", learningRoutes)
app.use("/api/dashboard", dashboardRoute)
app.use("/",aiRoute)
app.use("/", exerciseRoute)
app.use("/api/progress", progressRoute)

// ROutes 
app.get("/", (req, res) =>{
    res.send("AI backend runnign smoothly")
})

// Start the server 
const port = process.env.PORT;
app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
})