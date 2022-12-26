//We will write authentication related endpoints here.

const express=require('express')
const User=require('../Models/User.js') 
const router=express.Router()
const { body, validationResult } = require('express-validator');   //For Validation Process
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
 
const JWT_SECRET="IMPrakhar09"          //
//Create A user using: POST "/api/auth/createuser"  , this is the endpoint...No Login Required
router.post('/createuser',[
    body('name','Enter A Valid Name').isLength({min:3}),
    body('email','Enter A Valid Email').isEmail(),
    body('password','Password length must be 5 characters').isLength({min:5}),
],async(req,res)=>{
    //If There Are Errors, We Are Returning Bad Request along with the errors generated.

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Checking if the user with the same email Already exists 
    try                                                             //wrapping in try-catch, so that all errors/exceptions can be handled.
    {
        let user=await User.findOne({email:req.body.email})         //this will give me a user, which has that particular email..
        if(user)                                                    //if user exists already then return bad request..obvioulsy!
        {
            return res.status(400).json({error:"Sorry A User With This Email Already Exists!"})
        }
        
        const salt=await bcrypt.genSalt(10);                               //this will generate salt.
        securePassword=await bcrypt.hash(req.body.password,salt)     //this returns promise, so await is being used.

        //Creating A New User, awaits because it waits for the promise to be resolved
        user=await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securePassword
        })
        //then(user => res.json(user))
        //.catch((err)=>{
        //console.log("Error:",err)
        //res.json({error:'Account With This Email Already Exists!',description:err.message})
        //res.send(req.body)

        const data={
            user:{
                id:user.id
            }
        }
        const authenticationToken=jwt.sign(data,JWT_SECRET)         //what date is to be sent is the first arg and other arg. is the Jwt secret, these two args are accepted by this sign function..this secret will help us in determining, if the data is being tempered
        //console.log(jwtData)
        // res.json(user)                     //this json will be delivered as a respone once the user has been created!
        res.json({authenticationToken})

    } 
    catch (error)
    {
        console.error(error.message)
        res.status(500).send("Some Error Occured!")
    }
})

module.exports=router