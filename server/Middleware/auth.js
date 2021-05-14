import jwt from 'jsonwebtoken'
/*
 *Expected  :   userID 
 */

const auth = async (req,res,next) =>{
    console.log(req.headers)
   try {
       if(req.headers.hasOwnProperty('authorization')
       && req.headers.authorization.split(' ').length == 2 ){
        const secret = 'jwtkey'
        
        const token = req.headers.authorization.split(' ')[1]
        if(token && token.length > 90){
            let decodedData = jwt.verify(token,secret)
            req.userID = decodedData?.userID
            console.log(req.userID)
        }
       }else{
        req.userID = 'visitor'
        console.log('vissssss',req.userID)
       }
   } catch (error) {
       console.log(error)
   }finally{
    next()
   }
}

export default auth