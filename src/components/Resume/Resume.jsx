import React from 'react';

import { useHistory } from "react-router-dom";

import data from '../../static/resumeData.json'

import { 
    ResumeStyled,
    ResumeContentSection,
    ResumeWorksSection,
    ResumeTitleSection,
    ResumeTitleName,
    ResumeTitleProfession,
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
    ResumeWorkDescription,
    ResumeContactSection,
    ResumeContactContent,
    ResumeSkillsSection,
    ResumeSkillsTitle,
    ResumeSkillsList,
    ResumeSkill,
    ResumeProjectsSection,
    ResumeProjectsTitle,
    ResumeProjectsList,
    ResumeProject,
    ResumeSummarySection,
    ResumeSummaryTitle,
    ResumeSummaryDescription,
    ResumeProjectName,
    ResumeProjectDescription,
    ResumeProjectTech,
    ResumeDownloadButton
} 
from './Resume.styled';

const Resume = () => {

    const history = useHistory();

    const backHandler = () => {
        history.push("/")
        window.scrollTo(0, 0)
    }
    return(
        <>
        <ResumeStyled>

            <ResumeTitleSection>
                <ResumeTitleName>{data.resume.name}</ResumeTitleName>
                <ResumeTitleProfession>{data.resume.profession}</ResumeTitleProfession>
            </ResumeTitleSection>

            <ResumeContactSection>
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

            <ResumeContentSection>

                <ResumeSummarySection>
                    <ResumeSummaryTitle>              
                        Summary
                    </ResumeSummaryTitle>
                    <ResumeSummaryDescription>
                        {data.resume.summary}
                    </ResumeSummaryDescription>
                </ResumeSummarySection>

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

                <ResumeProjectsSection>
                    <ResumeProjectsTitle>Projects</ResumeProjectsTitle>
                    <ResumeProjectsList>
                        {
                            data.resume.projects.map(project => {
                                return(
                                    <ResumeProject>
                                        <ResumeProjectName>
                                            {project.name}
                                        </ResumeProjectName>
                                        <ResumeProjectDescription>
                                            {project.description}
                                        </ResumeProjectDescription>
                                        <ResumeProjectTech>
                                            <b>Technical Specifications:</b> {project.tech}
                                        </ResumeProjectTech>
                                    </ResumeProject>
                                )
                            })
                        }
                    </ResumeProjectsList>
                </ResumeProjectsSection>

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
            </ResumeContentSection>             

        </ResumeStyled>

        <ResumeDownloadButton href="https://github.com/danilo-mello/portfolio/raw/main/src/static/resume.pdf">Download</ResumeDownloadButton>
        <ResumeDownloadButton onClick={() => backHandler()}>Home</ResumeDownloadButton>
        
        </>
    )
}

export default Resume