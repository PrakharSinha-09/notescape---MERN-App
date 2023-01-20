var jwt = require('jsonwebtoken');
const JWT_SECRET="IMPrakhar09"          

//this is a middleware function, it accepts 3 arguments:
//1st is request, 2nd is response and third is next, which is also 
//a function which we will call at the very end of this funciton implementation
//so that wherever this middleware is used, function next to this, can be called

const fetchuser=(req,res,next)=>{         
    //get the user from JWT token and append the id to req object because while generating authentication token we have sent id in it 
    const token=req.header('auth-token');

    //if token does not get matched, return error
    if(!token)
    {
        res.status(401).send({error:"Please Authenticate Using a Valid Token"})
    }

    try {
        //Verifying the genertaed token with the secret
        const data=jwt.verify(token,JWT_SECRET)
        req.user=data.user                       //We'll get the user
        next()
    } catch (error) {
        res.status(401).send({error:"Please Authenticate Using a Valid Token"})

    }
}

module.exports=fetchuser; 