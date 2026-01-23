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
            res.send(404).json({status: false, message: "Email already exist"})
        }
        // Hash the password that is provided 
        const hashedPassword = await bcrypt.hash(password, process.env.Salt);

        // Then also generate the token for the user.
        const token = jwt.sign({name,email,subscriptionActve}, process.env.JWTSecretKey, {expiresIn: "30d"})
        
        // Save the user details to the database
        const saveDetails = User.create({name, email, "password": hashedPassword, skillLevel, learningGoal});

        if(saveDetails){
            res.send(200).json({
                "name": name,
                "email": email,
                "password": hashedPassword,
                "skillLevel": skillLevel,
                "learningGoal": learningGoal,
                "token": token
            })
        }
    } catch (error) {
        
    }
    
}

const Login = async (req, res) => {
    const {email, password} = req.body
    // Check if email exist 
    // Compare the password with the hashed password 
    // if true then generate a token 
}
