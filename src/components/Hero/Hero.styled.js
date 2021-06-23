import styled from 'styled-components';

export const StyledHero = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 576px) {
    display: flex;
    align-items: center;
    width: 19rem;
    height: 30rem;

    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    margin: 5rem 2rem 0rem 2rem;

  }

  width: 75rem;
  height: 58em;
  border: 2px solid #333333;
  border-radius: 25px;
  background: linear-gradient(to bottom right, #333333 0%, #333333 50%, #555555 50%, #555555 100%);
  padding: 10rem 15rem 10rem 25rem;

`;

export const StyledHeroTitle = styled.h1`
  align-items: left;
  color: #EFFFFA;
  font-size: 3.5rem;
  text-shadow: 1px 1px #666666;
  font-weight: 350;
  margin-bottom: 0;
  @media (max-width: 576px) {
    text-align: center;
    font-size: 2.5rem;
  }
  &:hover {
    transform: scale(1.01); 
    transition: transform 0.3s ease-in-out
  }
  @media (min-width: 576px) {
    animation-duration: 1s;
    animation-name: bbb;
    @keyframes bbb {
      from {
        padding: 0rem 0rem 0rem 2rem;
        color: #999999;

      to {
        padding: 0;
        color: #EFFFFA;

      }
    }
  }

`;

export const StyledHeroSubTitle = styled.h2`
  color: #666666;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: left;
  @media (max-width: 576px) {
    font-size: 1rem;
    text-align: center;
  }
  &:hover {
    transform: scale(1.01); 
    transition: transform 0.3s ease-in-out
  }
  align-items: left;

  @media (min-width: 576px) {
    animation-duration: 1s;
    animation-name: ccc;
    @keyframes ccc {
      from {
          color: #444444;
          padding: 0rem 0rem 0rem 2rem;

        to {
          color: #666666;
          padding: 0;


      }
    }
  }
`;

export const StyledHeroImage = styled.img`
  opacity: 0.9;
  border-radius: 7px;
  height: 25rem;
  width: 25rem;

  @media (max-width: 576px) {
    align-items: center;
    height: 12.5rem;
    width: 12.5rem;
    margin-top: 2rem;

    margin-bottom: 2rem;
  }
  &:hover {
    transform: scale(1.01); 
    transition: transform 0.3s ease-in-out
  }
  @media (min-width: 576px) {
    animation-duration: 1s;
    animation-name: imageanimation;
    @keyframes imageanimation {
      from {
        transform: scale(1.05); 

        to {
          transform: scale(1); 


      }
    }
  }

  
`;

export const StyledHeroLinkSection = styled.div`
  disply: flex;
  padding-bottom: .8rem;
  @media (min-width: 576px) {
    animation-duration: 1s;
    animation-name: linkssection;
    @keyframes linkssection {
      from {
        padding-left: 2rem;
        to {
        padding-left: 0;

      }
    }
  }
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
  
  animation-duration: 1s;
  animation-name: linkscolor;
  @keyframes linkscolor {
    from {
        color: #999999;
      to {
        color: #EFFFFA;

    }
  }
  
`;