import React ,{useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext'

const AddNote = () => {
    const context=useContext(noteContext)
    const {addNote}=context;                         //We just want addNote here.

    
    const [note,setNote]=useState({title:"", description:"", tag:""})
    
    const handleClick=(e)=>{
        e.preventDefault()
        addNote(note.title,note.description,note.tag)                       //so that while notes get added, it displays title and description which we are giving
        setNote({title:"", description:"", tag:""})                         //Once we have added the note, clear the fields...and for this, we have given a value attribute in each of the fields there in html(see below)
    }

    const onChange=(e)=>{
        setNote({...note, [e.target.name]:e.target.value })                 //this means jo pehle se hai, that will remain but new ones will be added on that, thats why spread operator is used initially.
    }
    return (
        <div className="container my-5">

            <h1>Add A Note</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" placeholder="What is The Title Of Your Note 🤔" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} minLength={3} required value={note.title}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" placeholder="Write Your Notes Here! 👈" className="form-control" id="description" name="description" onChange={onChange} minLength={3} required value={note.description}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" placeholder="Enter The Type Of Note" className="form-control" id="tag" name="tag" onChange={onChange} minLength={3} required value={note.tag}/>
                </div>
                <button disabled={note.title.length<3 || note.description.length<3} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note!</button>
            </form>
        </div>
    )
}

export default AddNote