const express = require('express')
const router = express.Router()
const { userData } = require('../models')
const {sign} = require('jsonwebtoken')
const {validateToken} = require('../middlewares/authentication')

router.get('/', async (req, res)=>{
     
    res.send("get request")
})

router.post('/', async (req, res) => {
    let post = await req.body;
    await userData.create(post);
    res.send(post)
})

router.post('/login', async(req, res)=>{
    const data = await req.body;
    console.log("Is errror down this at findOne "+ data)
    const isPresent = await userData.findOne({where : {
        email : data.email
    }});
    if(!isPresent){
        res.json({error :"Username doesn't exist"})
    }
    else{
        if(data.password === isPresent.password){
            console.log("is error down this at sign function ")
            const token = sign({email : isPresent.email, name : isPresent.name}, "home")
            res.send(token)
        }
        else{
            res.json({error:"Wrong Credentials"})
        }
    }
});

router.get('/findUser',validateToken, (req,res)=>{
    res.json(req.user)
})

module.exports = router;