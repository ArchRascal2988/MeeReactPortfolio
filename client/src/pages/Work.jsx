import React, {useState} from 'react';
import Project from '../componets/projectCard';
import ProjectFocus from '../componets/projectFocused';

const projNames= ["gitGud", "savepoint", "UT Browser Game", "UT", "UT"];
const imgPaths=['https://i.imgur.com/FtKs4Bp.png', 'https://i.imgur.com/a3C3hZm.jpg', 'https://i.imgur.com/5B5eoWd.png', 'https://i.imgur.com/5B5eoWd.png', 'https://i.imgur.com/5B5eoWd.png'];
const projLinks=['https://mysterious-atoll-10250.herokuapp.com/landing/login', 'https://canro2b.github.io/gitGud/']
const langs= ["HTML/CSS, JS", "Handlebars/CSS, JS, SQL", 'wip', 'wip', 'wip']

const Work= () =>{
    const [focusProj, setProject] = useState(``);

    return (
    <main>
        <div className="mainDiv">
            {projNames.map((proj, index)=>{
                return <Project key={index}
                name={proj} imgSrc={imgPaths[index]} link={projLinks[index]} languages={langs[index]} />
            })}
        </div>
        <div id='focusDiv'>
            <ProjectFocus project={focusProj}></ProjectFocus>
        </div>
    </main>
    );
}

export default Work;