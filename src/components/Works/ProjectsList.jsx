import React from 'react'

import ProjectCard from './ProjectCard'
import { StyledProjectsList } from './ProjectsList.styled';

import data from '../../static/projectsData.json'

const ProjectsList = () => {


    return (

        <StyledProjectsList>

            {data.projects && data.projects.map(project => {
                    return(
                        <ProjectCard 
                        key={project.name}
                        name={project.name} 
                        title={project.title}   
                        description={project.description}
                        link={project.link}
                        github={project.github}
                        image={project.image}
                        tools={project.tools}
                        />
                    )
            })}
        </StyledProjectsList>

    )
}

export default ProjectsList