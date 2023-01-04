import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
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
    const notesInitial=[
        {
            "_id": "63ad77d456539da30a22c486",
            "user": "63a6e619c2adee5b47591b93",
            "title": "Notescape Project",
            "description": "I'm Building A Full Stack Note Taking App, That will be capable to take notes from the user, User have to login to save their notes",
            "tag": "MERN Stack Project",
            "date": "2022-12-29T11:19:48.769Z",
            "__v": 0
          },
        {
            "_id": "63ad77d456539da30a22c486",
            "user": "63a6e619c2adee5b47591b93",
            "title": "Notescape Project",
            "description": "I'm Building A Full Stack Note Taking App, That will be capable to take notes from the user, User have to login to save their notes",
            "tag": "MERN Stack Project",
            "date": "2022-12-29T11:19:48.769Z",
            "__v": 0
          },
        {
            "_id": "63ad77d456539da30a22c486",
            "user": "63a6e619c2adee5b47591b93",
            "title": "Notescape Project",
            "description": "I'm Building A Full Stack Note Taking App, That will be capable to take notes from the user, User have to login to save their notes",
            "tag": "MERN Stack Project",
            "date": "2022-12-29T11:19:48.769Z",
            "__v": 0
          },
        {
            "_id": "63ad77d456539da30a22c486",
            "user": "63a6e619c2adee5b47591b93",
            "title": "Notescape Project",
            "description": "I'm Building A Full Stack Note Taking App, That will be capable to take notes from the user, User have to login to save their notes",
            "tag": "MERN Stack Project",
            "date": "2022-12-29T11:19:48.769Z",
            "__v": 0
          },
        {
            "_id": "63ad77d456539da30a22c486",
            "user": "63a6e619c2adee5b47591b93",
            "title": "Notescape Project",
            "description": "I'm Building A Full Stack Note Taking App, That will be capable to take notes from the user, User have to login to save their notes",
            "tag": "MERN Stack Project",
            "date": "2022-12-29T11:19:48.769Z",
            "__v": 0
          },
        {
            "_id": "63ad77d456539da30a22c486",
            "user": "63a6e619c2adee5b47591b93",
            "title": "Notescape Project",
            "description": "I'm Building A Full Stack Note Taking App, That will be capable to take notes from the user, User have to login to save their notes",
            "tag": "MERN Stack Project",
            "date": "2022-12-29T11:19:48.769Z",
            "__v": 0
          },
        {
            "_id": "63ad77d456539da30a22c486",
            "user": "63a6e619c2adee5b47591b93",
            "title": "Notescape Project",
            "description": "I'm Building A Full Stack Note Taking App, That will be capable to take notes from the user, User have to login to save their notes",
            "tag": "MERN Stack Project",
            "date": "2022-12-29T11:19:48.769Z",
            "__v": 0
          }
    ]

    const[notes,setNotes]=useState(notesInitial);
    return(
         <NoteContext.Provider value={{notes,setNotes}}>            {/*passing setNotes, so that we can access notes, but at the same time,we can update our notes too.*/}                  
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
