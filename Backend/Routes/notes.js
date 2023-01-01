//We will write notes related endpoints here.

const express = require('express')
const router = express.Router()
const Note = require('../Models/Note.js')
const { body, validationResult } = require('express-validator');

var fetchuser = require('../middleware/fetchUser')

//Route 1: Get All the Notes using: GET "/api/notes/fetchallnotes"  , this is the endpoint...login required

router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })       //Since we are using middleware, we will have our user in req.user
        res.json(notes)

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some Error Occured!")
    }
})

//Route 2: Add a new Note using: POST "/api/notes/addnote"  , this is the endpoint....login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter Title with minimum length 3').isLength({ min: 3 }),
    body('description', 'Enter Description with Minimum Length 5').isLength({ min: 5 }),
], async (req, res) => {

    try {
        const { title, description, tag } = req.body;
        console.log(title)
        console.log(description)
        console.log(tag)
        //if there are errors, return bad request and the errors
        const errors = validationResult(req);
        console.error(errors)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });            //if error generated, direcly return, we are not going todo anything.
        }

        const note = new Note({
            title, description, tag, user: req.user.id
        })

        const savedNote = await note.save()

        res.json(savedNote)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some Error Occured!")
    }
})

//Route 3: Updating an existing Note using: PUT "/api/notes/updatenote", this is the endpoint....login required
//whichever note, you want to update, you have to provide its id
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    try { 
        const {title,description,tag}=req.body;
    
        //Creating a newNote object
        const newNote={};
        if(title)                         //if title is coming from the user (means user want to update...right)
        {
            newNote.title=title;
        }
        if(description)                  //if description is coming from the user(means user want to update...right)
        {
            newNote.description=description;
        }
        if(tag)                         //if tag is coming from the user(means user want to update...right)
        {
            newNote.tag=tag;
        }
    
        //Now Find the note to be updated and update it.
        let note=await Note.findById(req.params.id)                  //this is the id of a note, which you want to update...in the endpoint(the id which we are sending)
        if(!note){                                                   //if the note of that id dosen't exist, obviously it will be error
            res.status(404).send("Not Found!")
        }
        
        //We need to check if this user has this note, in that case only he can update right!...he must not be in the position to update some other person note
        //Means a person is trying to update some other person notes
        if(note.user.toString()!==req.user.id)              //note.user.toString() will return the id of this note
        {                
            return res.status(401).send("Not Allowed!")
        }
    
        note=await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})                          //new:true means if some new content comes in, it will be created 
        res.json({note})
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some Error Occured!")
    }
})

//Route 4: Deleting Note using: DELETE "/api/notes/deletenote", this is the endpoint....login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        const {title,description,tag}=req.body;
    
        //We need to verify that a person who is deleting the note, is this note of that person
    
        //Find the note to be deleted and delete it.
        let note=await Note.findById(req.params.id)                 
        if(!note){                                              
            res.status(404).send("Not Found!")
        }
    
        //Allow deletion, if the person owns this note.
        if(note.user.toString()!==req.user.id)              
        {                
            return res.status(401).send("Not Allowed!")
        }
     
        note=await Note.findByIdAndDelete(req.params.id)                          //new:true means if some new content comes in, it will be created 
        res.send("Note Successfully Deleted!")
        
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some Error Occured!")
    }
})
module.exports = router