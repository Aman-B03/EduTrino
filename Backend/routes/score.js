const express = require('express');
const router = express.Router();
const {validateToken} = require('../middlewares/authentication');
const {userData} = require('../models')

router.get('/', validateToken, async(req, res)=>{

    const zero = 0;
    const scoreArray = await userData.findOne({where : {email : req.user.email}})
    console.log("Score getting : ", scoreArray.dataValues.score)
    if(scoreArray.dataValues.score){
        res.json(scoreArray.dataValues.score)
    }else{
        res.json(zero)
    }
})

router.get('/leaderboard', async(req, res)=>{
    const allUsers = await userData.findAll();
    res.json(allUsers)
})


router.post('/', validateToken, async(req, res)=>{
    const score = await req.body.score;
    console.log( "Score getting from post request", score)
    const Rawuser = await userData.findOne({where : {email : req.user.email }});
    const user = await Rawuser.dataValues.score;
    let newScore;
    

    if(user){
        
        console.log("previous score")
        const prevScore = user;
        console.log(prevScore, user.score)
        newScore = prevScore + score;
    }else{
        console.log("No previous score")
        newScore = score;
    }
    console.log("new score : ", newScore)
    await userData.update(
        { score: newScore }, 
        { where: { email: req.user.email } } 
      );
    res.send("Score updated")    

})



module.exports = router;