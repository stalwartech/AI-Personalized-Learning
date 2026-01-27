const User = require("../models/UserModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const env = require("dotenv").config()

const Signup = async (req, res) => {
    const {name, email, password, skillLevel, learningGoal} = req.body
    // Find the email if it exist 
    const emailExist = await User.findOne({email})
    // If email exist throw an error email exist else 
    try {
        if(emailExist){
            res.status(404).json({status: false, message: "Email already exist"})
        }
        // Hash the password that is provided 
        const hashedPassword = await bcrypt.hash(password, 10);

    
        // Then also generate the token for the user.
        const token = jwt.sign({name,email}, process.env.JWTSecretKey, {expiresIn: "30d"})
        console.log(`Token: ${token}`);        

        // Save the user details to the database
        const saveDetails = User.create({name, email, "password": hashedPassword, skillLevel, learningGoal});

        if(saveDetails){
            res.status(200).json({
                "name": name,
                "email": email,
                "password": hashedPassword,
                "skillLevel": skillLevel,
                "learningGoal": learningGoal,
                "token": token
            })
        }
    } catch (error) {
        console.log(error)
    }
    
}

const Login = async (req, res) => {
    const {email, password} = req.body
    // Check if email exist 
    const userMail = await User.findOne({email});
    if(!userMail){
        res.status(404).json({status: false, message: "Email doesn't exist"})
    }
    // Compare the password with the hashed password 
    const correctDetails = await bcrypt.compare(password, userMail.password)
    if(!correctDetails){
        res.status(500).json({status: false, message: "Invalid password"});
    }
    // if true then generate a token 
       // Then also generate the token for the user.
        const token = jwt.sign({email}, process.env.JWTSecretKey, {expiresIn: "30d"});
    res.status(200).json({
        status: true,  
        name: userMail.name,
        email: userMail.email,
        skillLevel: userMail.skillLevel,
        learningGoal: userMail.learningGoal,
        token: token,
        subscriptionActive: userMail.subscriptionActive,})
}

module.exports = {Login, Signup}