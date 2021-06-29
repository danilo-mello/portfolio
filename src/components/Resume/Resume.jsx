import React from 'react';

import data from '../../static/resumeData.json'

import { 
    ResumeStyled,
    ResumeContentSection,
    ResumeWorksSection,
    ResumeWorksAndEducationSection,
    ResumeTitleSection,
    ResumeTitleName,
    ResumeTitleProfession,
    ResumeTitleDescription,
    ResumeWorksSectionTitle,
    ResumeWork,
    ResumeWorkList,
    ResumeWorkPeriod,
    ResumeWorkDetails,
    ResumeWorkTitle,
    ResumeWorkCompany,
    ResumeEducationSection,
    ResumeEducationSectionTitle,
    ResumeEducation,
    ResumeEducationTitle,
    ResumeEducationName,
    ResumeContactAndSkillsSection,
    ResumeWorkDescription,
    ResumeContactSection,
    ResumeContactTitle,
    ResumeContactContent,
    ResumeSkillsSection,
    ResumeSkillsTitle,
    ResumeSkillsList,
    ResumeSkill,
} 
from './Resume.styled';

const Resume = () => {
    return(
        <ResumeStyled>

            <ResumeTitleSection>
                <ResumeTitleName>{data.resume.name}</ResumeTitleName>
                <ResumeTitleProfession>{data.resume.profession}</ResumeTitleProfession>
                <ResumeTitleDescription>
                    {data.resume.description}
                </ResumeTitleDescription>
            </ResumeTitleSection>

            <ResumeContentSection>

                <ResumeWorksAndEducationSection>

                    <ResumeWorksSection>

                        <ResumeWorksSectionTitle>Work History</ResumeWorksSectionTitle>
                            <ResumeWorkList>
                                {
                                    data.resume.works.map(work => {
                                        return(
                                            <ResumeWork>
                                                <ResumeWorkPeriod>
                                                    {work.period}
                                                </ResumeWorkPeriod>
                                                <ResumeWorkDetails>
                                                    <ResumeWorkTitle>{work.title}</ResumeWorkTitle>
                                                    <ResumeWorkCompany>{work.company}</ResumeWorkCompany>
                                                    <ul>
                                                        {
                                                            work.description.map(d => {
                                                                return(
                                                                    <ResumeWorkDescription>{d}</ResumeWorkDescription>
                                                                )
                                                            })
                                                        }
                                                        
                                                    </ul>
                                                    
                                                </ResumeWorkDetails>
                                            </ResumeWork>
                                        )
                                    })
                                }
                            </ResumeWorkList>

                    </ResumeWorksSection>

                    <ResumeEducationSection>
                        <ResumeEducationSectionTitle>Education</ResumeEducationSectionTitle>

                        {
                            data.resume.education.map(e => {
                                return(
                                    <ResumeEducation>
                                        <ResumeEducationTitle>
                                            {e.title}
                                        </ResumeEducationTitle>
                                        <ResumeEducationName>
                                            {e.college}
                                        </ResumeEducationName>
                                    </ResumeEducation>
                                )
                            })
                        }

                    </ResumeEducationSection>


                </ResumeWorksAndEducationSection>

                <ResumeContactAndSkillsSection>

                    <ResumeContactSection>
                        <ResumeContactTitle>Contact</ResumeContactTitle>
                        <ResumeContactContent>
                            {data.resume.adress}
                        </ResumeContactContent>
                        {
                            data.resume.contact.map(cont => {
                                return(
                                    <ResumeContactContent>
                                        {cont}
                                    </ResumeContactContent>
                                )

                            })
                        }

                    </ResumeContactSection>

                    <ResumeSkillsSection>
                        <ResumeSkillsTitle>Skills</ResumeSkillsTitle>
                        <ResumeSkillsList>
                            {
                                data.resume.skills.map(skill => {
                                    return(
                                        <ResumeSkill>
                                            {skill}
                                        </ResumeSkill>
                                    )
                                })
                            }
                        </ResumeSkillsList>
                    </ResumeSkillsSection>

                </ResumeContactAndSkillsSection>     

            </ResumeContentSection>             

        </ResumeStyled>
    )
}

export default Resume