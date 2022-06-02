import React from 'react';
import Project from '../componets/projectCard'

const projNames= ["gitGud", "savepoint", "UT Browser Game", "UT", "UT"];
const imgPaths=['https://i.imgur.com/a3C3hZm.jpg', 'https://i.imgur.com/FtKs4Bp.png', '', '', ''];
const projLinks=['https://mysterious-atoll-10250.herokuapp.com/landing/login', 'https://canro2b.github.io/gitGud/']
const langs= ["HTML/CSS, JS", "Handlebars/CSS, JS, SQL", '', '', '']

const Work= () =>{
    return (
        <div>
            {projNames.map((proj, index)=>{
                return <Project key={index}
                name={proj} imgSrc={imgPaths[index]} link={projLinks[index]} languages={langs[index]} />
            })}
        </div>
    );
}

export default Work;