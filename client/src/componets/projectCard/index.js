import React from "react";

const Project= (props)=>{
    return(
        <div>
        <a href={props.link}>
            <img src={props.imgSrc}></img>
            <div>
                <h3>{props.name}</h3>
                <h4>{props.languages}</h4>
            </div>
        </a>
        </div>
    );
}

export default Project;