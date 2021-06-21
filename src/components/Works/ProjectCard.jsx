import React from 'react'

import { 
    StyledProjectsCard, 
    StyledProjectImage,
    StyledImage,
    StyledProjectLinksSection,
    StyledProjectLink,
    StyledProjectTitle,
    StyledProjectDescription,
    StyledProjectTools
} from './ProjectCard.styled';
import calclog from '../../static/img/calc-log.png'

const ProjectsCard = (props) => {
    return (

        <StyledProjectsCard>

            <StyledProjectTitle>
                {props.name}
            </StyledProjectTitle>

            <StyledProjectImage>
                <StyledImage src={calclog} height="420" alt={props.name}/>
            </StyledProjectImage>


            <StyledProjectDescription>
                {props.description}
            </StyledProjectDescription>

            <StyledProjectTools>
            </StyledProjectTools>
      
            <StyledProjectLinksSection>

                <StyledProjectLink href={props.link} target="_blank">Visit!</StyledProjectLink>
                <StyledProjectLink href={props.github} target="_blank">Github</StyledProjectLink>

            </StyledProjectLinksSection>

        </StyledProjectsCard>

    )
}

export default ProjectsCard