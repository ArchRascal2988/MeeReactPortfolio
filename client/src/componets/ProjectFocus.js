import React from 'react';

const ProjectFocus= ({project})=>{
    console.log(project);

    return !project.name ? (
        <div className='div-sm'>
        </div>
    ) : (
        <div className='div-sm'>
            <div id='focusCard'>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <p> Status: {project.status}</p>
                <section>
                    <h4>Technology stack: </h4>
                    {project.techs.map((el, index)=> <p key={index}>{el}</p>)}
                </section>
                <section>
                    <a href={project.ghUrl}>Repo</a>
                    <br></br>
                    <a href={project.deployedUrl==="workin on it" ? "" : project.deployedUrl}>{project.deployedUrl==="workin on it" ? "Still need to deploy, check back later." : "Deployment"}</a>
                </section>
            </div>
        </div>
    );
}

export default ProjectFocus;