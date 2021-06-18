import styled from 'styled-components';

export const StyledProjectsSection = styled.div`
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

  border: 2px solid #333333;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  background: linear-gradient(to left,
    #555555 25%, #333333 25% 75% );


`;
