//We will write notes related endpoints here.

const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    
    res.json([])
})

module.exports=router