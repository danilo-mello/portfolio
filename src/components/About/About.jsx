import React from 'react'

import { StyledAboutSection,
        StyledAboutPart1,
        StyledAboutPart2,
        StyledSkillsSection,
        StyledSkillCard,
        StyledTitle,
        StyledTitleH1,
        StyledTitleH2,
        StyledTitleH3,
        StyledAboutDescription,
        StyledAboutDescriptionP,
        StyledSkillCardTitle,
        StyledSkillCardDescription,

} from './About.styled';


import { SiJavascript, SiReact, SiPython, SiNodeDotJs } from "react-icons/si";



const About = () => {
    return (
        <StyledAboutSection>
            <StyledAboutPart1>
                <StyledTitle>
                    <StyledTitleH1>Hi, I'm Danilo</StyledTitleH1>
                    <StyledTitleH3>About me</StyledTitleH3>
                </StyledTitle>

                <StyledAboutDescription>
                    <StyledAboutDescriptionP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a sapien vel augue varius luctus vitae nec enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a sapien vel augue varius luctus vitae nec enimPellentesque a sapien vel augue varius luctus vitae nec enimPellentesque a sapien vel augue varius luctus vitae nec enim</StyledAboutDescriptionP>
                </StyledAboutDescription>

            </StyledAboutPart1>

            <StyledAboutPart2>
                <StyledTitleH1>Skills</StyledTitleH1>
                <StyledSkillsSection>
                    <StyledSkillCard>
                        <StyledSkillCardTitle>
                            <SiReact size={80} /><StyledTitleH2>React</StyledTitleH2>
                        </StyledSkillCardTitle>
                        <StyledSkillCardDescription>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a sapien vel augue varius luctus vitae nec enim</p>
                        </StyledSkillCardDescription>
                    </StyledSkillCard>

                    <StyledSkillCard>
                        <StyledSkillCardTitle>
                            <SiNodeDotJs size={80} /><StyledTitleH2>Node</StyledTitleH2>
                        </StyledSkillCardTitle>
                        <StyledSkillCardDescription>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a sapien vel augue varius luctus vitae nec enim</p>
                        </StyledSkillCardDescription>
                    </StyledSkillCard>

                    <StyledSkillCard>
                        <StyledSkillCardTitle>
                            <SiJavascript size={80} /><StyledTitleH2>Javascript</StyledTitleH2>
                        </StyledSkillCardTitle>
                        <StyledSkillCardDescription>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a sapien vel augue varius luctus vitae nec enim</p>
                        </StyledSkillCardDescription>
                    </StyledSkillCard>

                    <StyledSkillCard>
                        <StyledSkillCardTitle>
                            <SiPython size={80} /><StyledTitleH2>Python</StyledTitleH2>
                        </StyledSkillCardTitle>
                        <StyledSkillCardDescription>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a sapien vel augue varius luctus vitae nec enim</p>
                        </StyledSkillCardDescription>
                    </StyledSkillCard>
                </StyledSkillsSection>
            </StyledAboutPart2>

        </StyledAboutSection>
    )
}

export default About