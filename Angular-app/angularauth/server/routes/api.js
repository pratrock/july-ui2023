const express = require('express')
const router = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

//localhost:3000/api
router.get('/', (req, res)=>{
    res.send('FROM API route')
})

function verifyToken(req, res, next){
  if(!req.headers.authorization){
    return res.status(401).send('Unautorized request')
  }else{
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
      return res.status(401).send('Unautorized request')
    }
    jwt.verify(token, 'secretKey', (err, payload)=>{
      if(payload){
        req.userId = payload.subject
        next()
      }
      if(err){
        return res.status(401).send('Unautorized request')
      }
    })
   
  }
}

//localhost:3000/api/register
router.post('/register', (req,res) => {
    console.log("Register Called")
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser)=>{
        if(error){
            console.log(error)
        }
        else{
            let payload = {subject:registeredUser._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
            // res.status(200).send(registeredUser)
        }
    })
})

//Login API
router.post('/login', (req,res) => {
    let userData = req.body
    //Mongoose Function
    User.findOne({email:userData.email}, (error, user)=>{
        if(error){
            console.log(error);
        }
        else
        {
            //case 1
            if(!user){
                res.status(401).send("Invalid email");
            }else{
                if(user.password !== userData.password){
                    res.status(401).send("Invalid password");
                }
                else{
                    let payload = {subject:user._id}
                    let token = jwt.sign(payload, 'secretKey')
                    res.status(200).send({token})
                    // res.status(200).send(user)
                }
            }
        }

    })
})

router.get('/events', (req, res)=>{
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          }
    ]
    res.json(events)
})


router.get('/special', verifyToken, (req, res)=>{
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          }
    ]
    res.json(events)
})
module.exports = router