import React from "react";

const Project= (props)=>{
    <div>
        <img src={props.imgSrc}></img>
        <div>
            <h3>{props.name}</h3>
            <h4>{props.languages}</h4>
        </div>
    </div>
}

export default Project;