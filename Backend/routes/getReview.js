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


router.get('/physics',validateToken, async (req, res)=>{
    const data = await physicsReview.findOne({where : {userId : req.user.id}});
    const newObject = {};
    for(const[key, value] of Object.entries(data.dataValues)){
        if(value != null){
            newObject[key] = value
        }
    }
    res.json(newObject)

});
router.get('/chemistry',validateToken, async (req, res)=>{

});
router.get('/maths',validateToken, async (req, res)=>{

});
router.get('/se',validateToken, async (req, res)=>{

});
router.get('/vp',validateToken, async (req, res)=>{

});
router.get('/ct',validateToken, async (req, res)=>{

});
router.get('/cn',validateToken, async (req, res)=>{

});







module.exports = router;