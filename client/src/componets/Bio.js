import React from "react";
import pfp from '../assets/ProfilePic.jpg'

const Bio= ()=>{
    return( 
        <section> 
            
            <div className="bioDiv">
            <img id='mee' src={pfp}  alt='myHeadshot'></img>
                <p className="blurb">
                    Hi! My name is Lex and I'm a 22 year old junior compsci student at UCF. I'm also certified as a full-stack web developer.
                    <br></br>
                    Programming is one of the coolest things in the world to me and I'm constantly building and trying to learn more, feel free to take a look at my work (And maybe you think we should work together..).
                </p>
            </div>
        </section>   
    );
}

export default Bio;