const User = require("../models/UserModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Signup = async (req, res) => {
    const {name, email, password, skillLevel, learningGoal} = req.body
    // Find the email if it exist 
    // If email exist throw an error email exist else 
    // Hash the password that is provided 
    // Then also generate the token for the user.
    // Save the user details to the database
    
    try {
        const findUser = await User.findOne({email})
        
    } catch (error) {
        
    }
}

const Login = async (req, res) => {
    const {email, password} = req.body
    // Check if email exist 
    // Compare the password with the hashed password 
    // if true then generate a token 
}
