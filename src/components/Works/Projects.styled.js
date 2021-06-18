import styled from 'styled-components';

export const StyledProjects = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background: #0D0C1D;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5%;
  width: 100%;
  padding: 30px;
  @media screen and (max-width: 760px) {

    grid-template-columns: repeat(1, 1fr);
   
  }
`;
