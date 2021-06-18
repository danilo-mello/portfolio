import React from 'react'

import { StyledProjectsCard, 
    StyledProjectImage,
    StyledImage,
    StyledProjectInfo,
    StyledProjectText,
    StyledProjectLinksSection,
    StyledProjectLink
} from './ProjectCard.styled';
import calclog from '../../calclog.png'

const ProjectsCard = (props) => {
    return (
        <StyledProjectsCard>
            
            <StyledProjectImage>
                <StyledImage src={calclog} height="420" alt="img"/>
            </StyledProjectImage>

            <StyledProjectInfo>
                <StyledProjectText>
                    
                    <h1>Harvest Vase</h1>
                    <h2>by studio and friends</h2>
                    <p>Harvest Vases are a reinterpretation of peeled fruits and vegetables as functional objects. The surfaces appear to be sliced and pulled aside, allowing room for growth. </p>
                </StyledProjectText>
                <StyledProjectLinksSection>
                    <StyledProjectLink>Visit!</StyledProjectLink>
                    <StyledProjectLink>Github</StyledProjectLink>
                </StyledProjectLinksSection>
            </StyledProjectInfo>
            
        </StyledProjectsCard>

    )
}

export default ProjectsCard