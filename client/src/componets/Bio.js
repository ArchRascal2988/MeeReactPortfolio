import React from "react";
import pfp from '../assets/ProfilePic.jpg';

import Skills from '../componets/Skills';

const Bio= ()=>{
    return( 
        <section> 
            
            <div className="bioDiv">
                <img id='mee' src={pfp}  alt='myHeadshot'></img>
                <p className="blurb">
                    Hey! I'm a 22 year old compsci student studying part-time at UCF. I'm also certified as a full-stack web developer.
                    <br></br>
                    Programming is one of the coolest things in the world to me and I'm constantly building and trying to expand my repitoire, feel free to take a look at my work (And hopefully you think we should work together..).
                </p>
            </div>
            
            <Skills />
        </section>   
    );
}

export default Bio;