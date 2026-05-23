const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

async function registerController(req,res){
    const {username,email,password,bio,profileImage} = req.body
    const isUser = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
    if(isUser){
        return res.status(409).json({
            msg:"invalid credentials username or email already exists"
        })
    }
    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
        username,
        email,
        password:hash,
        bio,
        profileImage
    })

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        msg:"user created successfully",
        user
    })
}


module.exports = {
    registerController
}