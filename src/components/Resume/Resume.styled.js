import styled from 'styled-components';

export const ResumeStyled = styled.div`
@media (max-width: 576px) {
    display: flex;
    align-items: center;
    width: 19rem;
    padding: 0.5rem 0rem 0.5rem 0rem;
    margin: 5rem 0 0rem 1.75rem;

  }
  background: #FFFFFF;
  margin-bottom: 2rem;
  margin-top: 1.5rem;
  width: 1190px;
  height: 1684px;
  align-items: center;
  color: #0D0C1D;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10rem;
  padding-right: 10rem;
`;

export const ResumeContentSection = styled.div`
`;

export const ResumeTitleSection = styled.div`
  display: flex;
  width: 100%;
`;

export const ResumeTitleName = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  text-align: left;
  height: 5rem;
  margin: 0;
  display: flex;
  align-items: flex-end;
`;

export const ResumeTitleProfession = styled.h2`
  font-size: 2.25rem;
  font-weight: 400;
  display: flex;
  align-items: flex-end;
  height: 5rem;
  margin: 0 0 0 11rem;
`;

export const ResumeTitleDescription = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: 1px;

`;

export const ResumeWorksAndEducationSection = styled.div`
    align-items: left;
    padding: 0 1rem 0 0;
`;

export const ResumeWorksSection = styled.div``;

export const ResumeWorksSectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  line-height: 2em;
  border-bottom: 3px solid #000000;
`;

export const ResumeWork = styled.div`
  display: flex;
  justify-content: column;
`;

export const ResumeWorkList = styled.div``;

export const ResumeWorkPeriod = styled.div`
  font-size: 0.8rem;
  width: 5rem;
`;

export const ResumeWorkDetails = styled.div``;

export const ResumeWorkTitle = styled.h3`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const ResumeWorkCompany = styled.p`
  font-size: 1rem;
  font-weight: 450;
`;

export const ResumeWorkDescription = styled.li`
  font-size: 1.1rem;
  font-weight: 350;`
;

export const ResumeEducationSection = styled.div``;

export const ResumeEducationSectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  line-height: 2em;
  border-bottom: 3px solid #000000;
`;

export const ResumeEducation = styled.div``;

export const ResumeEducationTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
`;

export const ResumeEducationName = styled.div`
  font-size: 1rem;
  font-weight: 450;
`;

export const ResumeContactAndSkillsSection = styled.div`
  padding: 0 0 0 1rem;
`;

export const ResumeContactSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ResumeContactContent = styled.div`
  font-size: 1rem;
  font-weight: 450;
  padding-right: 2rem;
  padding-top: 1.5rem;
`;

export const ResumeSkillsSection = styled.div``;

export const ResumeSkillsTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  line-height: 2em;
  border-bottom: 3px solid #000000;
`;

export const ResumeSkillsList = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ResumeSkill = styled.div`
  font-size: 1rem;
  font-weight: 400;
  padding-right: 0.5rem;
`;

export const ResumeProjectsSection = styled.div`

`;

export const ResumeProjectsTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  line-height: 2em;
  border-bottom: 3px solid #000000;
`;
export const ResumeProjectsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResumeProject = styled.div`
  font-size: 1rem;
  font-weight: 400;
  line-height: 2em;
  border-bottom: 2px solid #000000;
`;

export const ResumeSummarySection = styled.div``;
export const ResumeSummaryTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  line-height: 2em;
  border-bottom: 3px solid #000000;
`;

export const ResumeSummaryDescription = styled.div``;

export const ResumeProjectName = styled.div`
font-weight: 450;
font-size: 1.1rem;
`;
export const ResumeProjectDescription = styled.div`
font-size: 1rem;
`;
export const ResumeProjectTech = styled.div``;

export const ResumeDownloadButton = styled.a`
background-color: #333333;
border: 2px solid #333333;
font-weight: 300;
border-radius: 7px;
color: #EFFFFA;
padding: 1rem 2rem;
text-align: center;
display: inline-block;
font-size: 1.5rem;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
cursor: pointer;
margin-bottom: 5rem;
margin-right: 2rem;
text-decoration: none;
align-items: center;
&:hover {
  color: #000000;
  background-color: #555555;
  transform: scale(1.01); 
  transition: transform 0.3s ease-in-out
}
@media (max-width: 576px) {
  font-size: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;

}
`;