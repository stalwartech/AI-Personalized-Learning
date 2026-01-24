const jwt = require("jsonwebtoken");
const User = require("../models/UserModel.js");

const protect = async (req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWTSecretKey);
            req.user = await User.findOne(decoded.email);
            next()
        } catch (error) {
            return res.status(401).json({message: "Not authorized, token is failed"})
        }
    }

    if(!token){
        return res.status(401).json({message: "Not authorized, mo token found"})
    }
}

module.exports = {protect}