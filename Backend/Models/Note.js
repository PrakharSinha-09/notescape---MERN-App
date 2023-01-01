const mongoose = require('mongoose');
const {Schema}=mongoose; 
const NotesSchema = new Schema({
    user:{                                         //this is like foreign key, so that we can establish relationship b/w user and notes so that a user can view his notes only and not other users notes
        type:mongoose.Schema.Types.ObjectId,        //Simply it is linking notes model with the user model
        ref:'user'                                  //refernce model (obviously we are linking to the user model, so user will be there)
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:"General"
    },
    date:{
        type:Date,
        default:Date.now
    }
    

  });

  module.exports=mongoose.model('notes',NotesSchema);                   //first argument is passed, as it is the name of our collection inside notescape in mongodb