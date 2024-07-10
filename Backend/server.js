const express = require('express')
const cors = require('cors')
const app = express();
const db = require('./models')
const port = 3000
const router = require('./routes/Signup')

app.use(cors());
app.use(express.json());
app.use('/signUp', router);


db.sequelize.sync().then( ()=>{app.listen(port, ()=>{
    console.log("Server listening on port 3000")
});
})