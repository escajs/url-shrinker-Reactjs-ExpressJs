import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
   name : {
         type : String,
         required: true,
         minlength:5
   },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        minlength:5
    }
})

const userModel = mongoose.model('userModel',userSchema)

export default userModel