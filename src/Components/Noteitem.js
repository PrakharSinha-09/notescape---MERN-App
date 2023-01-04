import React from 'react'

const Noteitem = (props) => {
    const { noteASprops } = props;
    return (
        <div className="col-md-3">
            {/* We Can either go like this(without destructuring props) or via destructuring props and then use..We will be going via desructuring*/}
            {/* {props.noteASprops.title}           
        {props.noteASprops.description} */}
            {/* {noteASprops.title}
            {noteASprops.description} */}
            <div class="card my-3" style={{width: "18rem"}}>
                    <div class="card-body">
                        <h5 class="card-title">{noteASprops.title}</h5>
                        <p class="card-text">{noteASprops.description}</p>
                    </div>
            </div>

        </div>
    )
}

export default Noteitem