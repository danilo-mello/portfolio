import React from 'react'

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


import { 
    SiJavascript, 
    SiReact, 
    SiPython, 
    SiNodeDotJs, 
    SiPostgresql, 
    SiFirebase,
    SiDjango,
    SiJava,
    SiMysql,
    SiSass,
    SiMongodb,
    SiRedux

} from "react-icons/si";



const About = () => {
    return (
        <StyledAboutSection>

            <StyledAboutPart1>

                <StyledTitle>
                    <StyledTitleH1>Hi, I'm Danilo</StyledTitleH1>
                    <StyledTitleH3>Web Developer based in Vancouver</StyledTitleH3>
                </StyledTitle>

                <StyledAboutDescription>
                    <StyledAboutDescriptionP>
                        A developer who loves building applications and websites that make life easier. A hard worker who combines a passion for web development with expertise in logic. Have developed several websites and applications mainly using React or Django.
                    </StyledAboutDescriptionP>
                    <StyledButton>
                        Resume
                    </StyledButton>
                </StyledAboutDescription>

            </StyledAboutPart1>

            <StyledAboutPart2>
                <StyledTitleH1>Skills</StyledTitleH1>
                <StyledSkillsSection>

                    <StyledSkillCard>
                        <StyledSkillCardIcon>
                            <SiReact  />
                        </StyledSkillCardIcon>
                        <StyledSkillCardTitle>
                            React
                        </StyledSkillCardTitle>
                    </StyledSkillCard>

                    <StyledSkillCard>
                        <StyledSkillCardIcon>
                            <SiNodeDotJs  />
                        </StyledSkillCardIcon>
                        <StyledSkillCardTitle>
                            Node
                        </StyledSkillCardTitle>
                    </StyledSkillCard>

                    <StyledSkillCard>
                        <StyledSkillCardIcon>
                            <SiJavascript  />
                        </StyledSkillCardIcon>
                        <StyledSkillCardTitle>
                            Javascript
                        </StyledSkillCardTitle>
                    </StyledSkillCard>

                    <StyledSkillCard>
                        <StyledSkillCardIcon>
                            <SiPython  />
                        </StyledSkillCardIcon>
                        <StyledSkillCardTitle>
                            Python
                        </StyledSkillCardTitle>
                    </StyledSkillCard>

                    <StyledSkillCard>
                        <StyledSkillCardIcon>
                            <SiMongodb  />
                        </StyledSkillCardIcon>
                        <StyledSkillCardTitle>
                            MongoDB
                        </StyledSkillCardTitle>
                    </StyledSkillCard>

                    <StyledSkillCard>
                        <StyledSkillCardIcon>
                            <SiRedux  />
                        </StyledSkillCardIcon>
                        <StyledSkillCardTitle>
                            Redux
                        </StyledSkillCardTitle>
                    </StyledSkillCard>

                    <StyledSkillCard>
                        <StyledSkillCardIcon>
                            <SiPostgresql  />
                        </StyledSkillCardIcon>
                        <StyledSkillCardTitle>
                            PostgresSQL
                        </StyledSkillCardTitle>
                    </StyledSkillCard>

                    <StyledSkillCard>
                        <StyledSkillCardIcon>
                            <SiFirebase  />
                        </StyledSkillCardIcon>
                        <StyledSkillCardTitle>
                            Firebase
                        </StyledSkillCardTitle>
                    </StyledSkillCard>

                    <StyledSkillCard>
                        <StyledSkillCardIcon>
                            <SiDjango  />
                        </StyledSkillCardIcon>
                        <StyledSkillCardTitle>
                            Django
                        </StyledSkillCardTitle>
                    </StyledSkillCard>

                    <StyledSkillCard>
                        <StyledSkillCardIcon>
                            <SiJava  />
                        </StyledSkillCardIcon>
                        <StyledSkillCardTitle>
                            Java
                        </StyledSkillCardTitle>
                    </StyledSkillCard>
                    
                    <StyledSkillCard>
                        <StyledSkillCardIcon>
                            <SiMysql  />
                        </StyledSkillCardIcon>
                        <StyledSkillCardTitle>
                            MySQL
                        </StyledSkillCardTitle>
                    </StyledSkillCard>
                    
                    <StyledSkillCard>
                        <StyledSkillCardIcon>
                            <SiSass  />
                        </StyledSkillCardIcon>
                        <StyledSkillCardTitle>
                            Sass
                        </StyledSkillCardTitle>
                    </StyledSkillCard>
                    
                </StyledSkillsSection>
            </StyledAboutPart2>

        </StyledAboutSection>
    )
}

export default About