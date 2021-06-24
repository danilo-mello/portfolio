import React from 'react'

import { 
    StyledProjectsCard, 
    StyledProjectImage,
    StyledImage,
    StyledProjectLinksSection,
    StyledProjectLink,
    StyledProjectTitle,
    StyledProjectDescription,
    StyledProjectTools,
    StyledProjectTool
} from './ProjectCard.styled';


const ProjectsCard = (props) => {
    return (

        <StyledProjectsCard>

            <StyledProjectTitle>
                {props.name}
            </StyledProjectTitle>

            <StyledProjectImage>
                <StyledImage src={props.image} height="420" alt={props.name}/>
            </StyledProjectImage>


            <StyledProjectDescription>
                {props.description}
            </StyledProjectDescription>

            <StyledProjectTools>
                {props.tools && props.tools.map(tool => {
                        return(
                            <StyledProjectTool>{tool.icon} {tool.name}</StyledProjectTool>
                        )
                    }
                )}

            </StyledProjectTools>
      
            <StyledProjectLinksSection>

                <StyledProjectLink href={props.link} target="_blank">Visit</StyledProjectLink>
                <StyledProjectLink href={props.github} target="_blank">Github</StyledProjectLink>

            </StyledProjectLinksSection>

        </StyledProjectsCard>

    )
}

export default ProjectsCard