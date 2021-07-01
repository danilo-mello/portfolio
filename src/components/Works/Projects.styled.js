import styled from 'styled-components';

export const StyledProjectsSection = styled.div`

  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  width: 75rem;
  margin-bottom: 2rem;
  margin-top: 1.5rem;



  @media (max-width: 576px) {
    width: 19rem;
    padding: 0.5rem 0rem 0.5rem 0rem;
    margin: 5rem 0 0rem 1.75rem;
  }
  padding-top: 5rem;
  border: 2px solid ${({ theme }) => theme.cardBackground};
  border-radius: 25px;
  background: linear-gradient(to left, ${({ theme }) => theme.cardBackground} 25%, ${({ theme }) => theme.cardBackground1} 25% 75% );

`;

export const ProjectsSectionTitle = styled.div`
  text-align: left;
  color: ${({ theme }) => theme.textColorDark};
  padding-top: 1rem;
  padding-bottom: 2rem;
  font-size: 3.5rem;
  text-shadow: 1px 1px ${({ theme }) => theme.textColorDark};
  font-weight: 350;
  @media (max-width: 576px) {
    font-size: 3rem;
  }
  @media (min-width: 576px) {
    animation-duration: 1s;
    animation-name: slidein;
    @keyframes slidein {
      from {
        padding-left: 8rem;
      to {
        padding-left: 0rem;
      }
    }
  }
`;