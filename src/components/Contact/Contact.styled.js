import styled from 'styled-components';

export const StyledContatcSection = styled.div`
@media (max-width: 576px) {
  align-items: center;
  padding: 0.5rem 0rem 2rem 1rem;
  margin: 5rem 1rem 0 2rem;
  flex-direction: column;
  height: auto;
  
}
  height: 900px;
  align-items: center;
  justify-content: center;
  color: white;
  display: flex;
  padding-left: 10rem;
  padding-right: 10rem;
  border-radius: 25px;
  background: linear-gradient(to top,
    #555555 25%, #333333 25% 75% );
`;

export const StyledContactTitlesSection = styled.div`
  padding-right: 10rem;
  padding-bottom: 12rem;
  @media (max-width: 576px) {
    padding: 0;
    margin: 0;
  }
`;


export const StyledContactSubTitle = styled.h4`
  color: #666666;
  font-size: 1.5rem;
  font-weight: 300;

  @media (max-width: 576px) {
    font-size: 2rem;
    padding: 0;
    margin: 0;
  }
  &:hover {
    transform: scale(1.01); 
    transition: transform 0.3s ease-in-out
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
  &:hover {
    transform: scale(1.01); 
    transition: transform 0.3s ease-in-out
  }
  
`;
