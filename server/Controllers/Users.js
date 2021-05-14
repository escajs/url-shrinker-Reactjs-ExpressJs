import userModel from "./../Model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
export const signup = async (req,res) =>{

    const {firstName,lastName,password,confirmPassword,email} = req.body

    try {

        const existingUser = await userModel.findOne({email})

        if(existingUser) res.status(400).json({message : 'User Already Exist'})

        if(password != confirmPassword) res.status(400).json({message : "Password don't match"})
       
        // Every thing is alright
       
        const hashedPassword = await bcrypt.hash(password,12)
       
        const newUser = await userModel.create({
         
            name : `${firstName} ${lastName}`,
         
            email : email,
      
            password : hashedPassword

        })

        res.status(200).json(newUser)
    } catch (error) {
        console.log(error)
    }
}  

// sign in process
export const signin = async (req,res) =>{
    //we will recieve all form data but we will filter 2 important properties
    const {email,password} = req.body

    try {

        const existingUser = await userModel.findOne({email})

        if(!existingUser) res.status(400).json({massage : "E-mail or password is incorrect."})
       
        const correctPassword = await bcrypt.compare(password,existingUser.password)
        
        if(!correctPassword) res.status(400).json({massage : "E-mail or password is incorrect."})

        // if info are correct , generate the jwt token
      
        const token = jwt.sign({userID : existingUser._id},'jwtkey',{expiresIn:'1h'})
      
        res.status(200).json({token})
    } catch (error) {
        console.log(error)
    
        res.status(400).json({message : 'Something went wrong.'})
    }
}