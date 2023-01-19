import React ,{useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext'

const AddNote = () => {
    const context=useContext(noteContext)
    const {addNote}=context;                         //We just want addNote here.

    
    const [note,setNote]=useState({title:"", description:"", tag:"Default"})
    
    const handleClick=(e)=>{
        e.preventDefault()
        addNote(note.title,note.description,note.tag)                       //so that while notes get added, it displays title and description which we are giving
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
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={onChange}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note!</button>
            </form>
        </div>
    )
}

export default AddNote