import React, {useState} from 'react';
import Project from '../componets/ProjectCard';
import ProjectFocus from '../componets/ProjectFocus';
import sp from "../assets/savepoint.jpg";
import gg from "../assets/gitGudSS.png";
import placeholder from "../assets/placeholder.jpg";

const projects=[
    {
        name:'gitGud',
        coverSrc: gg,
        ghUrl: ['https://github.com/ArchRascal2988/gitGud'],
        deployedUrl: ['https://canro2b.github.io/gitGud/'],
        description: 'My first web application! Very rudimentary, but it is a single page app inteded to be a free game recommender integrated with twitch.',
        techs: ['HTML/CSS', 'JS', 'Open source APIs: Twitch, Free2Game'],
        status: "Done"
    },
    {
        name: 'savepoint',
        coverSrc: sp,
        ghUrl: ['https://github.com/ArchRascal2988/savepoint'],
        deployedUrl: ['workin on it'],
        description: 'Letterboxed but for videogames',
        techs: ['HTML/CSS', 'Bootstrap', 'Handlebars', 'Node.JS', 'SQL', 'Open source APIs: IGDB(Used to seed DB)'],
        status: "Done but need to deploy"
    },
    {
        name: 'The Scenic Route',
        coverSrc: placeholder,
        ghUrl: ['https://github.com/ArchRascal2988/theScenicRoute'],
        deployedUrl: ['workin on it'],
        description: 'App for user curated hiking/biking trails',
        techs: ['HTML/CSS', 'React', 'GraphQL', 'Node.JS', 'MongoDB', 'Mapbox'],
        status: "Done but need to deploy"
    },
    {
        name: 'ToDo Apps',
        coverSrc: placeholder,
        ghUrl: ['https://github.com/ArchRascal2988/ToDo_React-JS' ,'https://github.com/ArchRascal2988/ToDo_C-Sharp', 'https://github.com/ArchRascal2988/ToDo_Java'],
        deployedUrl: ['workin on it'],
        description: 'In the interest of both demonstrating basic web dev skills and for personal learning, I made todo apps in a variety of languages/frameworks. All following MVC and all running off a shared database.',
        techs: ['HTML/CSS', 'React', 'Node.JS', 'C#', '.NET MVC', 'Java', 'Spring', 'MongoDB', ],
        status: "In progress"
    },
    // {
    //     name: 'LAMP server',
    //     coverSrc: placeholder,
    //     ghUrl: ['n/a'],
    //     deployedUrl: ['n/a'],
    //     description: 'RPI 4 as a LAMP server so i can host my own projects eventually.',
    //     techs: ['Ubunut Server', 'Apache Server', 'MySQL', 'Python'],
    //     status: "In Progress"
    // },
    {
        name: 'TFT Companion App',
        coverSrc: placeholder,
        ghUrl: ["https://github.com/ArchRascal2988/TFTBuilder"],
        deployedUrl: 'workin on it',
        description: 'A companion app for the game Team Fight Tacticts. Users can make, save, and share team compositons.',
        techs: ['HTML/CSS', 'React Redux', 'Node.JS', 'GraphQL', 'MongoDB', 'Tailwind/DaisyUI'],
        status: "In Progress"
    }
]



const Work= () =>{
    const [focusProj, setProject] = useState({});

    const changeProj= (index)=>{
        setProject(projects[index]);
    }

    return (
    <main>
        <div className="div-lg scrollable">
            {projects.map((proj, index)=>{
                return <Project key={index} i={index}
                name={proj.name} imgSrc={proj.coverSrc} clickHandler={changeProj}/>
            })}
        </div>
        <ProjectFocus project={focusProj}></ProjectFocus>

    </main>
    );
}

export default Work;