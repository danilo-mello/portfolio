import React from 'react'

import { StyledAboutSection,
        StyledAboutPart1,
        StyledAboutPart2,
        StyledSkillsSection,
        StyledSkillCard,
        StyledTitle,
        StyledTitleH1,
        StyledTitleH3,
        StyledAboutDescription,
        StyledAboutDescriptionP,

} from './About.styled';


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
                <h1>Skills</h1>
                <StyledSkillsSection>
                    <StyledSkillCard>
                        <span>icon</span><h2>React</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a sapien vel augue varius luctus vitae nec enim</p>
                    </StyledSkillCard>
                    <StyledSkillCard>
                        <span>icon</span><h2>React</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a sapien vel augue varius luctus vitae nec enim</p>
                    </StyledSkillCard>
                    <StyledSkillCard>
                        <span>icon</span><h2>React</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a sapien vel augue varius luctus vitae nec enim</p>
                    </StyledSkillCard>
                    <StyledSkillCard>
                        <span>icon</span><h2>React</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a sapien vel augue varius luctus vitae nec enim</p>
                    </StyledSkillCard>
                </StyledSkillsSection>
            </StyledAboutPart2>

        </StyledAboutSection>
    )
}

export default About