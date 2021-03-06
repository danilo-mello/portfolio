import styled from 'styled-components';

export const StyledContatcSection = styled.div`
@media (max-width: 576px) {
  align-items: center;
  padding: 0.5rem 0rem 2rem 0rem;
  margin: 5rem 0 0 1.75rem;
  flex-direction: column;
  width: 19rem;
  
}
  margin-top: 1.5rem;
  height: 56rem;;
  width: 75rem;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.textColorDark};
  display: flex;
  padding-left: 10rem;
  padding-right: 10rem;
  border-radius: 25px;
  background: linear-gradient(to top,
    ${({ theme }) => theme.cardBackground} 25%, ${({ theme }) => theme.cardBackground1} 25% 75% );
`;

export const StyledContactTitlesSection = styled.div`
  padding-right: 10rem;
  padding-bottom: 12rem;
  @media (max-width: 576px) {
    padding: 0;
    margin: 0;
  }
  
  @media (min-width: 576px) {
    animation-duration: 1s;
    animation-name: slidein;
    @keyframes slidein {
      from {
        padding-right: 16rem;
      }
    
      to {
        padding-right: 10rem;
        padding-bottom: 12rem;
      }
    }
  }

`;


export const StyledContactSubTitle = styled.h4`
  color: ${({ theme }) => theme.textColorDark};
  font-size: 1.5rem;
  font-weight: 300;

  @media (max-width: 576px) {
    font-size: 2rem;
    padding: 0;
    margin: 0;
    text-align: center;
    padding: 0;
    margin: 0;
  }
  &:hover {
    transform: scale(1.01); 
    transition: transform 0.3s ease-in-out
  }


`;

export const StyledContactTitle = styled.h1`
  color: ${({ theme }) => theme.textColorDark};
  font-size: 3.5rem;
  text-shadow: 1px 1px ${({ theme }) => theme.textColorDark};;
  font-weight: 350;
  @media (max-width: 576px) {
    font-size: 2.5rem;
    text-align: center;
    padding: 1.5rem;
    margin: 0;
  }
  &:hover {
    transform: scale(1.01); 
    transition: transform 0.3s ease-in-out
  }
  
`;
