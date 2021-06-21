import styled from 'styled-components';

export const StyledProjectsSection = styled.div`

  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {

  }

  border: 2px solid #333333;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  background: linear-gradient(to left, #555555 25%, #333333 25% 75% );

`;

export const ProjectsSectionTitle = styled.div`
  text-align: left;
  color: #EFFFFA;
  padding-top: 1rem;
  font-size: 3.5rem;
  text-shadow: 1px 1px #666666;
  font-weight: 350;
  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
`;