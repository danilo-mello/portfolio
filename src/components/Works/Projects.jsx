import React from 'react'

import { StyledProjectsSection, ProjectsSectionTitle } from './Projects.styled';

import ProjectsList from './ProjectsList'

const Projects = () => {
    return (
        <StyledProjectsSection>

            <ProjectsSectionTitle>
                works
            </ProjectsSectionTitle>

            <ProjectsList />
            
        </StyledProjectsSection>
    )
}

export default Projects