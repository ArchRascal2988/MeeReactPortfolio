import React from 'react';
import Bio from '../componets/Bio';
import Skills from '../componets/Skills';

const About= () =>{
    return (
    <main>
        <div className="mainDiv">
            <Bio />
            <Skills />
        </div>
    </main>
    );
}

export default About;