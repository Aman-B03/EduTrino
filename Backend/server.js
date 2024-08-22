const express = require('express')
const cors = require('cors')
const app = express();
const db = require('./models')
const port = 3000
const router = require('./routes/Signup')
const scoreRouter = require('./routes/score')

app.use(cors());
app.use(express.json());
app.use('/signUp', router);
app.use('/score', scoreRouter);


db.sequelize.sync().then( ()=>{app.listen(port, ()=>{
    console.log("Server listening on port 3000")
});
})