import React from 'react';
import Bio from '../componets/bio/index';
import Skills from '../componets/skills';

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