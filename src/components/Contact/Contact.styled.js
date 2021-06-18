import styled from 'styled-components';

export const StyledContatcSection = styled.div`
  @media (max-width: 576px) {
    width: 100%;
    height: 100vh;
    flex-direction: column;
  }
  width: 100%;
  height: 100vh;
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

export const StyledContactTitlesSection = styled.div`
  padding-right: 10rem;
  padding-bottom: 12rem;
`;

export const StyledContactFormSection = styled.div`

  

`;

export const StyledContactSubTitle = styled.h4`
  color: #666666;
  font-size: 1.5rem;
  font-weight: 300;

  @media (max-width: 576px) {
    font-size: 2rem;
  }


`;

export const StyledContactTitle = styled.h1`
  color: #EFFFFA;
  font-size: 3.5rem;
  text-shadow: 1px 1px #666666;
  font-weight: 350;
  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
`;
