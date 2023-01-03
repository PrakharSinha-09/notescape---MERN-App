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

    return(
        <NoteContext.Provider value={{}}>                   
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
