import React from 'react'

import ProjectCard from './ProjectCard'
import { StyledProjectsList } from './ProjectsList.styled';

const ProjectsList = () => {
    return (
        <StyledProjectsList>
            <ProjectCard name="Calc Log" title="Calc Log" description="Calculator web app with saving log function" />
            {/* <ProjectCard name="Calc Log" title="Calc Log" description="Calculator web app with saving log function" />

            <ProjectCard name="Calc Log" title="Calc Log" description="Calculator web app with saving log function" />
            <ProjectCard name="Calc Log" title="Calc Log" description="Calculator web app with saving log function" /> */}

        </StyledProjectsList>

    )
}

export default ProjectsList