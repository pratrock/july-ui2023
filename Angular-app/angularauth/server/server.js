const express = require('express')
const cors = require('cors');

const PORT = 3000
const api = require('./routes/api')
const app  = express()
app.use(express.json())
app.use(cors())


const mongoose = require('mongoose')
const db = "mongodb://localhost:27017/authdb"

mongoose.connect(db, err=>{
    if (err)
    {
        console.log('Error!'+err)
    }
    else{
        console.log("Connected to database")
    }
})

//localhost:3000/api
app.use('/api', api)

app.get('/', (req, res) => {res.send("Hello World")})

app.listen(PORT, function(){
    console.log("Server running on PORT:"+PORT)
})