import styled from 'styled-components';

export const StyledAboutSection = styled.div`
  @media (max-width: 576px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  color: white;
  display: flex;
  justify-content: center;
  padding-left: 10rem;
  padding-right: 10rem;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  background: linear-gradient(to top, #333333, #555555 );
`;

export const StyledAboutPart1 = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15rem;
  padding-bottom: 15rem;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const StyledAboutPart2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledSkillsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledSkillCard = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5rem;
  background:
  color: #EFFFFA;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  &:hover {
    transform: scale(1.01); 
    transition: transform 0.3s ease-in-out
  }

`;

export const StyledTitle = styled.div`

`;

export const StyledTitleH1 = styled.h1`
  padding-right: 10rem;
  color: #EFFFFA;
  font-size: 3.5rem;
  text-shadow: 1px 1px #666666;
  font-weight: 350;
  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
`;

export const StyledTitleH2 = styled.h2`
  color: #EFFFFA;
  font-size: 2rem;
  text-shadow: 1px 1px #666666;
  font-weight: 350;
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
  padding-left: 2rem;
`;

export const StyledTitleH3 = styled.h3`
  color: #EFFFFA;
  font-size: 1.5rem;
  text-shadow: 1px 1px #666666;
  font-weight: 350;
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

export const StyledAboutDescription = styled.div`
  width: 27rem;
`;

export const StyledAboutDescriptionP = styled.p`
`;

export const StyledIcon = styled.span`
  font-size: 5rem;

`;

export const StyledSkillCardTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledSkillCardDescription = styled.div`
  font-size: 1.1rem;
`;