//This will be schema defined for the user, who will login each time
const mongoose = require('mongoose');
const {Schema}=mongoose;        //to create schema, this is mandatory!


const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

  });

const User=mongoose.model('user',UserSchema);  
User.createIndexes();
module.exports=User;              //this means, through above schema we are designing Model...accepts two args, first is the name of the model and other is schema

  //This Schema will be used in the Routes