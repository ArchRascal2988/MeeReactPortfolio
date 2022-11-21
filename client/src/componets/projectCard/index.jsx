import React from "react";

const Project= (props)=>{
    return(
        <div className="projCard">
            <a href={props.link}>
                <img className="cardImg" src={props.imgSrc} alt={props.name}></img>
                <div className="card-title">
                    <h3>{props.name}</h3>
                    <h4>{props.languages}</h4>
                </div>
            </a>
        </div>
    );
}

export default Project;