import React from "react";

function Title(props){
    return(
        <div className="title-container">
            <h2>{props.title.toUpperCase()}</h2>
        </div>
    )
}

export default Title