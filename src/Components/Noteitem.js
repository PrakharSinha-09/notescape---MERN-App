import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'

const Noteitem = (props) => {
    const context=useContext(noteContext)
    const { deleteNote } = context;                //Destructuring context because in context we have a delete note functionality
    const {noteASprops}=props
    return (
        <div className="col-md-3">
            {/* We Can either go like this(without destructuring props) or via destructuring props and then use..We will be going via desructuring*/}
            {/* {props.noteASprops.title}           
        {props.noteASprops.description} */}
            {/* {noteASprops.title}
            {noteASprops.description} */}
            <div className="card my-3" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{noteASprops.title}</h5>
                        <p className="card-text">{noteASprops.description}</p>
                        <i className="fa-solid fa-trash" onClick={()=>{deleteNote(noteASprops._id)}}></i>
                        <i className="fa-regular fa-pen-to-square mx-3"></i>
                    </div>
            </div>

        </div>
    )
}

export default Noteitem