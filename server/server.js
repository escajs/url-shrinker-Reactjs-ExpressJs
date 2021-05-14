// Importing Core Modules
import express from "express"
import mongoose from 'mongoose'
import cors from 'cors'
import urlsModel from "./Model/urlsModel.js";
// Importing Routes
import urlsRoute from './Routes/Urls.js'
import usersRoute from "./Routes/User.js";
import userLinks from './Routes/AuthorizedUserLinks.js'
// Initialize App Instance
const app = express()

// Set Up Middlewares
app.use(cors({origin:true}))
app.use(express.json({limit:'.1mb'}))
app.use(express.urlencoded({extended:true,limit:'0.1mb'}))

app.use('/urls',urlsRoute)
app.use('/users',usersRoute)
app.use('/userlinks',userLinks)
// DB Connection
const URI = process.env.MONGODB_URI
mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.then(_=>app.listen(process.env.PORT || 3000))
.catch(err=>console.log(err))


app.get("/",(req,res)=>{
    res.send('OK 200')
})


app.get('/:rndm',async (req,res)=>{
    try {
        const userLink = await urlsModel.findOne({shortURL : req.params.rndm})
        if(!userLink) res.status(400).json({message : 'Link does not exist'})
        let increment = userLink.visitingCount +=1
        await userLink.save()
        res.redirect(userLink.longURL)
    } catch (error) {
        res.status(400).json({message : error})
    }
})

