import styled from 'styled-components';

export const StyledContatcSection = styled.div`
  @media (max-width: 576px) {
    width: 100%;
    height: 100vh;
    flex-direction: column;
  }
  width: 100%;
  height: 100vh;
  background: #555555;
  align-items: center;
  color: white;
  display: flex;
  justify-content: center;
  padding-left: 10rem;
  padding-right: 10rem;

  background-image:
  linear-gradient(#333333 0, #333333 100%),
  linear-gradient(#333333 0, #333333 100%),
  linear-gradient(#555555 0, #555555 100%),
  linear-gradient(#555555 0, #555555 100%);
  background-size: 50% 65%;
  background-position: top left, top right, bottom right, bottom left;
  background-repeat: no-repeat;

  a {
    font-size: 1.5rem;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
      transform: scale(1.05); 
      transition: transform 0.3s ease-in-out
    }
  }

`;

export const StyledContactTitlesSection = styled.div`
@media (max-width: 576px) {
  padding-right: 0;
}
  padding-right: 10rem;
  padding-bottom: 12rem;
`;

export const StyledContactFormSection = styled.div`

  

`;

export const StyledContactSubTitle = styled.h4`
  color: #666666;
  font-size: 1.5rem;
  @media (max-width: 576px) {
    font-size: 2rem;
  }


`;

export const StyledContactTitle = styled.h1`
  color: #EFFFFA;
  font-size: 3.5rem;
  text-shadow: 1px 1px #666666;

  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
`;
