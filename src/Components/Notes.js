import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote';
import Noteitem from './Noteitem';


export const Notes = () => {
  const context = useContext(noteContext)
  const { notes, getNotes, editNote } = context;                         //Destructuring to get values inside notes and setNotes.
  useEffect(() => {

    getNotes()
  }, [])

  const ref = useRef(null)                                    //initially keeping the value null.
  const refClose = useRef(null)                                    //initially keeping the value null.
  
  const [note,setNote]=useState({id:"", updatedtitle:"", updateddescription:"", updatedtag:"Default"})
  
  const updateNote = (currentNote) => {
    ref.current.click()                                       //ref.current means where our ref is pointing and then click on that event.
    setNote({id:currentNote._id, updatedtitle:currentNote.title, updateddescription:currentNote.description, updatedtag:currentNote.tag})
  }

  const handleClick = (e) => {
    console.log("Updating The Note...",note)
    refClose.current.click() 
    editNote(note.id,note.updatedtitle,note.updateddescription,note.updatedtag)
    
    // addNote(note.title, note.description, note.tag)                       
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <>
      <AddNote />

      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="updatedtitle" name="updatedtitle" value={note.updatedtitle} aria-describedby="emailHelp" onChange={onChange} minLength={3} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="updateddescription" name="updateddescription" value={note.updateddescription} onChange={onChange} minLength={3} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="updatedtag" name="updatedtag" value={note.updatedtag} onChange={onChange} minLength={3} required/>
                </div>
                {/* <button type="submit" className="btn btn-primary" onClick={handleClick}>Save Changes!</button> */}

              </form>
            </div>

            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.updatedtitle.length<3 || note.updateddescription.length<3} type="button" className="btn btn-primary" onClick={handleClick}>Save Changes!</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">

        <h1>Your Notes</h1>
        <div className="container">                              {/*This container class so that the statement written down doesn't go out of flow */}
          {notes.length===0 && 'No Notes To Display'} 
        </div>
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} noteASprops={note} />                  //Sending note as props to Noteitem component so that we can extract whatever information from it
          //remember how map works..when we want some function to work for all the elements of the array, we use map
        })}
      </div>
    </>
  )
}
