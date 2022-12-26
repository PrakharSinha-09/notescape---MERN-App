//Lets Get Connected To The MongoDb Server
const mongoose=require('mongoose');               //it is not a ES6 way of importing!

const mongoURI="mongodb://localhost:27017/Notescape"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected To MongoDB Successfully!")
    })
}

module.exports=connectToMongo