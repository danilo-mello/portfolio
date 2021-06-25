import React from 'react'

import { useHistory } from "react-router-dom";

import { 
    StyledAboutSection,
    StyledAboutPart1,
    StyledAboutPart2,
    StyledSkillsSection,
    StyledSkillCard,
    StyledTitle,
    StyledTitleH1,
    StyledTitleH3,
    StyledAboutDescription,
    StyledAboutDescriptionP,
    StyledSkillCardTitle,
    StyledSkillCardIcon,
    StyledButton,
} from './About.styled';

import RenderIcon from '../helpers/RenderIcon'

import data from '../../static/projectsData.json'

const About = () => {

    const history = useHistory();

    const resumeHandler = () => {
        // history.push("/resume")
        history.push("/")
    }

    return (
        <StyledAboutSection id="about">

            <StyledAboutPart1>

                <StyledTitle>
                    <StyledTitleH1>Hi, I'm Danilo</StyledTitleH1>
                    <StyledTitleH3>Developer based in Vancouver</StyledTitleH3>
                </StyledTitle>

                <StyledAboutDescription>
                    <StyledAboutDescriptionP>
                        A developer who loves building applications and websites that make life easier. A hard worker who combines a passion for web development with expertise in logic. Have developed several websites and applications mainly using React or Django.
                    </StyledAboutDescriptionP>
                    <StyledButton onClick={() => resumeHandler()}>
                        Resume
                    </StyledButton>
                </StyledAboutDescription>

            </StyledAboutPart1>

            <StyledAboutPart2>
                <StyledTitleH1>Skills</StyledTitleH1>
                <StyledSkillsSection>

                    {data.skills && data.skills.map(skill => {
                        
                        if(skill.icon !== undefined){
                            return(
                                <StyledSkillCard key={skill.name}>
                                    <StyledSkillCardIcon>
                                        <RenderIcon tag={skill.icon} />
                                    </StyledSkillCardIcon>
                                    <StyledSkillCardTitle>
                                        {skill.name}
                                    </StyledSkillCardTitle>
                                </StyledSkillCard>
                            )
                        } else {
                            return(
                                <StyledSkillCard>
                                    <StyledSkillCardTitle>
                                        {skill.name}
                                    </StyledSkillCardTitle>
                                </StyledSkillCard>
                            )
                        }
                    })}
                    
                </StyledSkillsSection>
            </StyledAboutPart2>

        </StyledAboutSection>
    )
}

export default About