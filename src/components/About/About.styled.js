import styled from 'styled-components';

export const StyledAboutSection = styled.div`
  @media (max-width: 576px) {
    display: none;

  }

  align-items: center;
  color: #EFFFFA;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10rem;
  padding-right: 10rem;
  border-radius: 25px;
  background: linear-gradient(to top,
    #555555 60%, #333333 25% 75% );
`;

export const StyledAboutPart1 = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 150px;
  padding-bottom: 150px;
  @media (max-width: 576px) {
    flex-direction: column;
  }

`;

export const StyledAboutPart2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 2rem;

`;

export const StyledSkillsSection = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  @media (max-width: 576px) {
    flex-direction: column;
    grid-template-columns:50% 50%;
  }
`;

export const StyledSkillCard = styled.div`
  width: 300px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  color: #EFFFFA;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  &:hover {
    transform: scale(1.02); 
    transition: transform 0.3s ease-in-out;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);

  }

`;

export const StyledTitle = styled.div`
  margin-top: 5rem;

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
  justify-content: center;
  text-align: center;
  text-shadow: 1px 1px #666666;
  font-weight: 350;
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background: linear-gradient(to top, #888888, #999999 );
  opacity: 0.9;
  border-radius: 25px;
  opacity: 0.9;
  margin-top: 5rem;
  height: 250px;
  width: 650px;
  justify-content: center;
  text-align: center;
  &:hover {
    transform: scale(1.01); 
    transition: transform 0.3s ease-in-out;
  }
`;

export const StyledAboutDescriptionP = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  padding: 1rem;
  color: #0D0C1D;


`;

export const StyledIcon = styled.span`
  font-size: 5rem;

`;

export const StyledSkillCardTitle = styled.div`
  justify-content: center;
  text-align: center;
  color: #EFFFFA;
  font-size: 2rem;
  text-shadow: 1px 1px #666666;
  font-weight: 350;
  padding-top: 1rem;
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }

`;

export const StyledSkillCardIcon = styled.div`
  font-size: 1.1rem;
  justify-content: center;
  text-align: center;

`;

export const StyledButton = styled.div`
  background-color: #333333;
  border: 2px solid #333333;
  font-weight: 300;
  border-radius: 7px;
  color: #999999;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 1.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    color: #0D0C1D;
    background-color: #555555;
    transform: scale(1.01); 
    transition: transform 0.3s ease-in-out
  }
`;