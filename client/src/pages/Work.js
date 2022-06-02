import React from 'react';

const projNames= ["gitGud", "savepoint", "UT Browser Game", "UT", "UT"];
const projPaths=['../assets/gitGudSS.png', '../savepoint.jpg', '', '', ''];
const langs= ["HTML/CSS, JS", "Handlebars/CSS, JS, SQL", '', '', '']

const Work= () =>{
    return (
        <main>
             <div>
                {projNames.map((proj, index)=>{
                    return <Project name={proj} imgSrc={projPaths[index]} languages={langs[index]} />
                })}
            </div>
        </main>
    );
}

export default Work;