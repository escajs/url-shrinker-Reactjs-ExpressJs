import mongoose from "mongoose"
const urlSchema = new mongoose.Schema({
    creator : String,
    longURL : {
        type : String,
        lowercase : true,
        minlength:5,
        require:true
    },
    shortURL : {
        type : String,
        default : null
    },visitingCount : {
        type : Number,
        default : 0
    }
}) 

const urlsModel = mongoose.model('urlsModel',urlSchema)

export default urlsModel