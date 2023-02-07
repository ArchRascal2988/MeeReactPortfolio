import React from "react";

const Project= ({key, name, imgSrc, clickHandler})=>{
    return(
        <div className="cardContainer">
            <a onClick={clickHandler(key)}>
                <img className="cardImg" src={imgSrc} alt={name}></img>
                <div className="card-title">
                    <h3>{name}</h3>
                </div>
            </a>
        </div>
    );
}

export default Project;