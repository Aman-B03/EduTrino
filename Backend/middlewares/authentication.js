const {verify} = require("jsonwebtoken");

const validateToken = (req, res, next)=>{
    const token = req.header("token");

    if(!token){
       return res.json({error : "You must log in first"})
    }
    else{
    try {
        const validToken = verify(token, "home");
        req.user = validToken;
        if(validToken){
            return next();
        }
        
    } catch (err) {
        res.json({error : err})
    }
}
}

module.exports = {validateToken};