const express = require('express');
const router = express.Router();
const { validateToken } = require('../middlewares/authentication');
const { userData } = require('../models')
const { physicsReview } = require('../models');
const {chemistryReview} = require('../models');
const {mathsReview} = require('../models');
const {vpReview} = require('../models');
const {seReview} = require('../models');
const {cnReview} = require('../models');
const {ctReview} = require('../models');

router.get('/', validateToken, async (req, res) => {

    const zero = 0;
    const scoreArray = await userData.findOne({ where: { email: req.user.email } })
    if (scoreArray.dataValues.score) {
        res.json(scoreArray.dataValues.score)
    } else {
        res.json(zero)
    }
})

router.get('/leaderboard', async (req, res) => {
    const allUsers = await userData.findAll();
    res.json(allUsers)
})






// Physics

router.post('/postPhysicsScore', validateToken, async (req, res) => {
    const data = await req.body;
    data.userId = req.user.id;

    const isUser = await physicsReview.findOne({where : {userId: data.userId}})
    if(isUser){
        console.log("User Present")
       await physicsReview.update(
        {[data.chapter] : data.mastery},
        {where:{userId : data.userId}}
       )
    }else{
        console.log("User not present");
        const postObject = {
            userId : data.userId,
            [data.chapter] : data.mastery
        };

        await physicsReview.create(postObject)
    }

    res.json("Sucessfully done")
})



// Chemistry

router.post('/postChemistryScore', validateToken, async (req, res) => {
    const data = await req.body;
    data.userId = req.user.id;

    const isUser = await chemistryReview.findOne({where : {userId: data.userId}})
    if(isUser){
        console.log("User Present")
       await chemistryReview.update(
        {[data.chapter] : data.mastery},
        {where:{userId : data.userId}}
       )
    }else{
        console.log("User not present");
        const postObject = {
            userId : data.userId,
            [data.chapter] : data.mastery
        };

        await chemistryReview.create(postObject)
    }

    res.json("Sucessfully done")
})



// Maths


router.post('/postMathsScore', validateToken, async (req, res) => {
    const data = await req.body;
    data.userId = req.user.id;

    const isUser = await mathsReview.findOne({where : {userId: data.userId}})
    if(isUser){
        console.log("User Present")
       await mathsReview.update(
        {[data.chapter] : data.mastery},
        {where:{userId : data.userId}}
       )
    }else{
        console.log("User not present");
        const postObject = {
            userId : data.userId,
            [data.chapter] : data.mastery
        };

        await mathsReview.create(postObject)
    }

    res.json("Sucessfully done")
})



// SE

router.post('/postSEScore', validateToken, async (req, res) => {
    const data = await req.body;
    data.userId = req.user.id;

    const isUser = await seReview.findOne({where : {userId: data.userId}})
    if(isUser){
        console.log("User Present")
       await seReview.update(
        {[data.chapter] : data.mastery},
        {where:{userId : data.userId}}
       )
    }else{
        console.log("User not present");
        const postObject = {
            userId : data.userId,
            [data.chapter] : data.mastery
        };

        await seReview.create(postObject)
    }

    res.json("Sucessfully done")
})



// VP


router.post('/postVPScore', validateToken, async (req, res) => {
    const data = await req.body;
    data.userId = req.user.id;

    const isUser = await vpReview.findOne({where : {userId: data.userId}})
    if(isUser){
        console.log("User Present")
       await vpReview.update(
        {[data.chapter] : data.mastery},
        {where:{userId : data.userId}}
       )
    }else{
        console.log("User not present");
        const postObject = {
            userId : data.userId,
            [data.chapter] : data.mastery
        };

        await vpReview.create(postObject)
    }

    res.json("Sucessfully done")
})




// CT 


router.post('/postCTScore', validateToken, async (req, res) => {
    const data = await req.body;
    data.userId = req.user.id;

    const isUser = await ctReview.findOne({where : {userId: data.userId}})
    if(isUser){
        console.log("User Present")
       await ctReview.update(
        {[data.chapter] : data.mastery},
        {where:{userId : data.userId}}
       )
    }else{
        console.log("User not present");
        const postObject = {
            userId : data.userId,
            [data.chapter] : data.mastery
        };

        await ctReview.create(postObject)
    }

    res.json("Sucessfully done")
})




// CN


router.post('/postCNScore', validateToken, async (req, res) => {
    const data = await req.body;
    data.userId = req.user.id;

    const isUser = await cnReview.findOne({where : {userId: data.userId}})
    if(isUser){
        console.log("User Present")
       await cnReview.update(
        {[data.chapter] : data.mastery},
        {where:{userId : data.userId}}
       )
    }else{
        console.log("User not present");
        const postObject = {
            userId : data.userId,
            [data.chapter] : data.mastery
        };

        await cnReview.create(postObject)
    }

    res.json("Sucessfully done")
})





router.post('/', validateToken, async (req, res) => {
    const score = await req.body.score;
    const Rawuser = await userData.findOne({ where: { email: req.user.email } });
    const user = await Rawuser.dataValues.score;
    let newScore;


    if (user) {
        const prevScore = user;
        newScore = prevScore + score;
    } else {
        newScore = score;
    }
    await userData.update(
        { score: newScore },
        { where: { email: req.user.email } }
    );
    res.send("Score updated")

})



module.exports = router;