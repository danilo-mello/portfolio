import React from 'react'

import { StyledProjectsSection } from './Projects.styled';

import ProjectsList from './ProjectsList'

const Projects = () => {
    return (
        <StyledProjectsSection>
            <ProjectsList />
        </StyledProjectsSection>
    )
}

export default Projects