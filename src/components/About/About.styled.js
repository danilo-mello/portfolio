import styled from 'styled-components';

export const StyledAboutSection = styled.div`
@media (max-width: 576px) {
  display: flex;
  align-items: center;
  width: 19rem;
  padding: 0.5rem 0rem 0.5rem 0rem;
  margin: 5rem 0 0rem 1.75rem;
  background: linear-gradient(to top,
    #555555 56%, #333333 25% 75% );

}
  width: 75rem;
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
  padding-top: 9rem;
  padding-bottom: 9rem;
  @media (max-width: 576px) {
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

`;

export const StyledAboutPart2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 2rem;
  @media (max-width: 576px) {
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

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
  width: 15rem;
  display: flex;
  margin: 0.5rem;

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
  @media (max-width: 576px) {
    width: auto;
    height: 5rem;
    margin: 0.5rem;
  }

`;

export const StyledTitle = styled.div`
  margin-top: 5rem;
  @media (max-width: 576px) {
    margin-top: 1rem;
  }
`;

export const StyledTitleH1 = styled.h1`
  padding-right: 10rem;
  color: #EFFFFA;
  font-size: 3.5rem;
  text-shadow: 1px 1px #666666;
  font-weight: 350;
  @media (max-width: 576px) {
    text-align: center;
    font-size: 2.5rem;
    padding-right: 0;

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
    text-align: center;
    font-size: 1.5rem;
    padding-right: 0;
  }
`;

export const StyledTitleH3 = styled.h3`
  color: #EFFFFA;
  font-size: 1.5rem;
  text-shadow: 1px 1px #666666;
  font-weight: 350;
  @media (max-width: 576px) {
    text-align: center;
    font-size: 1.25rem;
  }
`;

export const StyledAboutDescription = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background: linear-gradient(to top, #888888, #999999 );
  opacity: 0.9;
  border-radius: 25px;
  opacity: 0.9;
  margin-top: 5rem;


  height: 18rem;
  width: 40rem;
  justify-content: center;
  text-align: center;
  &:hover {
    transform: scale(1.01); 
    transition: transform 0.3s ease-in-out;
  }
  @media (max-width: 576px) {
    width: 80%;
    justify-content: center;
    text-align: center;
    margin: 0 1rem 2rem 1rem;
    width: auto;
    height: auto;
  }
`;

export const StyledAboutDescriptionP = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  padding: 1rem;
  color: #0D0C1D;

  @media (max-width: 576px) {
    font-size: 1rem;

  }
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
    font-size: 1rem;
    padding-top: 0;

  }

`;

export const StyledSkillCardIcon = styled.div`
  justify-content: center;
  text-align: center;
  font-size: 5rem;
  @media (max-width: 576px) {
    font-size: 2rem;
  }

`;

export const StyledButton = styled.div`
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