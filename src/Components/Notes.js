import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote';
import Noteitem from './Noteitem';


export const Notes = () => {
    const context=useContext(noteContext)
    const {notes}=context;                         //Destructuring to get values inside notes and setNotes.
  return (
    <>
    <AddNote/>
    <div className="row my-3">
        <h1>Your Notes</h1>
            {notes.map((note)=>{
              return <Noteitem key={note._id} noteASprops={note}/>                  //Sending note as props to Noteitem component so that we can extract whatever information from it
              //remember how map works..when we want some function to work for all the elements of the array, we use map
            })}
    </div>
    </>
  )
}
