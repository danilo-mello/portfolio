import styled from 'styled-components';

export const StyledHero = styled.div`
  color: white;
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    display: none;

  }
  border: 2px solid #333333;
  border-radius: 25px;
  background: linear-gradient(to bottom right, #333333 0%, #333333 50%, #555555 50%, #555555 100%);
  padding: 10rem 15rem 10rem 15rem;;

`;

export const StyledHeroTitle = styled.h1`
  align-items: left;
  color: #EFFFFA;
  font-size: 3.5rem;
  text-shadow: 1px 1px #666666;
  font-weight: 350;
  margin-bottom: 0;
  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
  &:hover {
    transform: scale(1.01); 
    transition: transform 0.3s ease-in-out
  }
`;

export const StyledHeroSubTitle = styled.h2`
  color: #666666;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: left;
  @media (max-width: 576px) {
    font-size: 2rem;
  }
  &:hover {
    transform: scale(1.01); 
    transition: transform 0.3s ease-in-out
  }
  align-items: left;

`;

export const StyledHeroImage = styled.img`
  align-items: center;
  opacity: 0.9;
  border-radius: 7px;
  &:hover {
    transform: scale(1.01); 
    transition: transform 0.3s ease-in-out
  }
`;

export const StyledHeroLinkSection = styled.div`
  disply: flex;
  padding-bottom: .8rem;
`;

export const StyledHeroLink = styled.a`
  text-decoration: none;
  color: #EFFFFA;
  font-size: 1.25rem;
  letter-spacing: 1px;

  &:hover {
    transform: scale(1.05); 
    transition: transform 0.3s ease-in-out;
  }
`;