const express = require('express')
const router = express.Router()
const { userData } = require('../models')

router.get('/', async (req, res)=>{
     
    res.send("get request")
})

router.post('/', async (req, res) => {
    let post = await req.body;
    await userData.create(post);
    res.send(post)
})


module.exports = router;