import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  // const s1={
  //     "name":"Prakhar Sinha",
  //     "Course":"B Tech"
  // }

  //Now using use state, so that we can update our state variables
  // const[state,setState]=useState(s1)          //Initially we are using state s1, so s1 is passed.
  // const update=()=>{
  //     setTimeout(()=>{
  //         setState({
  //             "name":"Prabal Sinha",
  //             "Course":"Commerce"
  //         })
  //     },1000)
  // }
  const host = "http://localhost:30000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

  //Get All Notes
  const getNotes = async () => {
    //Making An API Call. 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNmU2MTljMmFkZWU1YjQ3NTkxYjkzIn0sImlhdCI6MTY3MjE1MzU5NX0._ZfGc4dDYmMoQj-fS_2ELBMqmI7SeyHO6cjx-12lxkc"
      }
    });

    const json=await response.json();                     //It will keep waiting till it gets response from the above made request.
    console.log(json)
    setNotes(json)
  }
    //Add a Note
    const addNote = async (title, description, tag) => {
      //Todo API Call obviously so that in the backend too, it gets added!

      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNmU2MTljMmFkZWU1YjQ3NTkxYjkzIn0sImlhdCI6MTY3MjE1MzU5NX0._ZfGc4dDYmMoQj-fS_2ELBMqmI7SeyHO6cjx-12lxkc "
        },

        body: JSON.stringify({title, description, tag})
      });

      const note=await response.json()         //This means wait till we don't get note
      setNotes(notes.concat(note))            //this means in notes array, concat note and finally return the new notes state
      
      console.log("Adding a note")
      // const note = {
      //   "_id": "63ad77d456539da30a22c986",
      //   "user": "63a6e619c2adee5b47591b93",
      //   "title": title,
      //   "description": description,
      //   "tag": tag,
      //   "date": "2022-12-29T11:19:48.769Z",
      //   "__v": 0
      // };
    }

    //Delete A Note
    const deleteNote =async (id) => {
      //Todo API Call obviously so that in the backend too, it gets deleted!
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNmU2MTljMmFkZWU1YjQ3NTkxYjkzIn0sImlhdCI6MTY3MjE1MzU5NX0._ZfGc4dDYmMoQj-fS_2ELBMqmI7SeyHO6cjx-12lxkc "
        }
      });
      const json=response.json()
      console.log(json)
      console.log("Deleting A Node! with " + id)
      //  const confir=confirm("This Note Will Be Deleted!")
      try {
        const newNotes = notes.filter(function del(note) { return note._id !== id })          //if note._id!==got by the function then only it will stay in the note array
        setNotes(newNotes)
        
      } catch (error) {
        console.log(error)
      }

    }

    //Edit A Note
    const editNote = async (id, title, description, tag) => {
      //API Call
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNmU2MTljMmFkZWU1YjQ3NTkxYjkzIn0sImlhdCI6MTY3MjE1MzU5NX0._ZfGc4dDYmMoQj-fS_2ELBMqmI7SeyHO6cjx-12lxkc"
        },
        body: JSON.stringify({title, description, tag})
      });
      const json =await response.json()

      //Because React Doesn't allow us to change the state directly, we will make the copy of our notes and then change
      let newNotes=JSON.parse(JSON.stringify(notes))
      //Logic to edit a note in client side
      for (let index = 0; index < notes.length; index++) {
        const element = newNotes[index];

        if (element._id === id) {
          newNotes[index].title = title
          newNotes[index].description = description
          newNotes[index].tag = tag

          break;
        }
      }
      setNotes(newNotes)
    }

    return (
      <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>            {/*passing setNotes, so that we can access notes, but at the same time,we can update our notes too.*/}
        {props.children}
      </NoteContext.Provider>
    )
}
export default NoteState;
