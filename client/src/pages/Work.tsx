import React, {useState} from 'react';
import Project from '../componets/ProjectCard';
import ProjectFocus from '../componets/ProjectFocus';


const projects:{name:string, coverUrl:string,  description:string, ghUrl:string[] ,deployedUrl:string[], techs:string[]}[]=[
    {
        name:'gitGud',
        coverUrl: 'https://i.imgur.com/FtKs4Bp.png',
        ghUrl: ['https://github.com/ArchRascal2988/gitGud'],
        deployedUrl: ['https://canro2b.github.io/gitGud/'],
        description: 'My first web application! Very rudimentary, but it is a single page app inteded to be a free game recommender integrated with twitch.',
        techs: ['HTML/CSS', 'JS', 'Open source apis: Twitch, Free2Game']
    },
    {
        name: 'savepoint',
        coverUrl: 'https://i.imgur.com/a3C3hZm.jpg',
        ghUrl: ['https://github.com/ArchRascal2988/savepoint'],
        deployedUrl: ['workin on it'],
        description: 'Letterboxed but for videogames',
        techs: ['HTML/CSS', 'Bootstrap', 'Handlebars', 'Node.JS', 'SQL', 'Open source apis: IGDB(Used to seed DB)']
    },
    {
        name: 'The Scenic Route',
        coverUrl: 'workin on it',
        ghUrl: ['https://github.com/ArchRascal2988/theScenicRoute'],
        deployedUrl: ['workin on it'],
        description: 'App for user curated hiking/biking trails',
        techs: ['HTML/CSS', 'Handlebars', 'Node.JS', 'SQL', 'Open source apis: IGDB(Used to seed DB)']
    },
    {
        name: 'ToDo Apps',
        coverUrl: 'workin on it',
        ghUrl: ['https://github.com/ArchRascal2988/ToDo_React-JS' ,'https://github.com/ArchRascal2988/ToDo_C-Sharp', 'https://github.com/ArchRascal2988/ToDo_Java'],
        deployedUrl: ['workin on it'],
        description: 'In the interest of both demonstrating basic web dev skills and for personal learning, I made todo apps in a variety of languages/frameworks. All following MVC and all running off a shared database.',
        techs: ['HTML/CSS', 'React.js', 'Node.JS', 'C#', '.NET MVC', 'Java', 'Spring', 'MongoDB', ]
    },
    {
        name: 'LAMP server',
        coverUrl: 'workin on it',
        ghUrl: ['workin on it'],
        deployedUrl: ['n/a'],
        description: 'A personal web server, currently hosting this portfolio!',
        techs: []
    },
    {
        name: 'TFT Builder',
        coverUrl: 'workin on it',
        ghUrl: ["]https://github.com/ArchRascal2988/TFTBuilder"],
        deployedUrl: ['workin on it'],
        description: 'In the interest of both demonstrating basic web dev skills and for personal learning, I made todo apps in a variety of languages/frameworks. All following MVC and all running off a shared database.',
        techs: ['HTML/CSS', 'React.js', 'Node.JS', 'GraphQL', 'MongoDB', 'Tailwind/DaisyUI']
    }
]



const Work= () =>{
    const [focusProj, setProject] = useState({});

    const changeProj= (index:number)=>{
        setProject(projects[index]);
    }

    return (
    <main>
        <div className="div-lg">
            {projects.map((proj, index)=>{
                return <Project key={index}
                name={proj.name} imgSrc={proj.coverUrl} clickHandler={changeProj}/>
            })}
        </div>
        <ProjectFocus project={focusProj}></ProjectFocus>

    </main>
    );
}

export default Work;