const express = require('express')
const cors = require('cors')
const app = express();
const db = require('./models')
const port = 3000
const router = require('./routes/Signup')
const scoreRouter = require('./routes/score')
const getReviewRouter = require('./routes/getReview')

app.use(cors());
app.use(express.json());
app.use('/signUp', router);
app.use('/score', scoreRouter);
app.use('/getReview', getReviewRouter);


db.sequelize.sync().then( ()=>{app.listen(port, ()=>{
    console.log("Server listening on port 3000")
});
})