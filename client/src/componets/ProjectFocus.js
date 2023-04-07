import React from 'react';

const ProjectFocus= ({project})=>{
    console.log(project);

    return !project.name ? (
        <div className='div-sm'>
        </div>
    ) : (
        <div className='div-sm'>
        <h4>{project.name}</h4>
        <p>{project.description}</p>
        <section>
            <h5>Technology stack: </h5>
            {project.techs.map((el, index)=> <p key={index}>{el}</p>)}
        </section>
       
        <section>
            <a href={project.ghUrl}>Deployment</a>
            <a href={project.deployedUrl}>Repo</a>
        </section>
    </div>
    );
}

export default ProjectFocus;