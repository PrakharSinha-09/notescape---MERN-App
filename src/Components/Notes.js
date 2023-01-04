import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem';


export const Notes = () => {
    const context=useContext(noteContext)
    const {notes,setNotes}=context;                         //Destructuring to get values inside notes and setNotes.
  return (
    <div className="row my-3">
        <h1>Your Notes</h1>
            {notes.map((note)=>{
                return <Noteitem noteASprops={note}/>                  //Sending note as props to Noteitem component so that we can extract whatever information from it
            })}
    </div>
  )
}
