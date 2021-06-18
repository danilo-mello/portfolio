import React from 'react'

import ProjectCard from './ProjectCard'
import { StyledProjects } from './Projects.styled';

const Projects = () => {
    return (
        <StyledProjects>
            <ProjectCard name="Calc Log" title="Calc Log" description="Calculator web app with saving log function" />
        </StyledProjects>

    )
}

export default Projects