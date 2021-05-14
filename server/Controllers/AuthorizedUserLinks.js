import urlsModel from "../Model/urlsModel.js";
import userModel from "../Model/userModel.js";

export const getUserData = async (req,res) =>{
    try{
      if(req.userID != 'visitor'){
        const {page = 1,limit} = req.query
        const user = await userModel.findOne({_id : req.userID})
        if(!user) req.status(400).json({message : 'Error occured'})
        const userName = user.name
        // Check for links
        if (!limit || limit > 5) limit=5
        let links
        const totalLinks = await urlsModel.countDocuments({creator : String(req.userID)})
        if(totalLinks > 5 ){
          links =await urlsModel.find({creator : String(req.userID)}).limit(limit*1).skip(totalLinks-limit*page)
        }else{
          links =await urlsModel.find({creator : String(req.userID)}).limit(limit*1).skip((page-1)*limit)
        }
        res.status(200).json({userName,links,totalLinks})
      }else{
          // if visitor
      }
    }catch(error){
       res.json({message : 'cannot fetch'})
    }
}

