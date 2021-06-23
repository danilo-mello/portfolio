import styled from 'styled-components';

export const StyledProjectsCard = styled.div`
  margin: 0;
  margin-bottom: 2rem;
  border-radius: 25px;
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  background: linear-gradient(to top, #888888, #999999 );
  opacity: 0.9;
  width: 60rem;
  @media (max-width: 576px) {
    width: 17rem;

  }
`;

export const StyledProjectImage = styled.div`
padding: 1rem;
align-items: center;
justify-content: center;
  &:hover {
    transform: scale(1.01); 
    transition: transform 0.3s ease-in-out
  }
`;

export const StyledImage = styled.img`
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  @media (max-width: 576px) {
    width: 15rem;
    height: auto;
  }
`;

export const StyledProjectLinksSection = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;

  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  @media (max-width: 576px) {
    padding-bottom: 2rem;

  }
`;

export const StyledProjectLink = styled.a`
text-decoration: none;
background-color: #333333;
border: 2px solid #333333;
font-weight: 300;
border-radius: 7px;
color: #EFFFFA;
padding: 1rem 2rem;
text-align: center;
display: inline-block;
font-size: 1.5rem;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
cursor: pointer;
&:hover {
  color: #000000;
  background-color: #555555;
  transform: scale(1.01); 
  transition: transform 0.3s ease-in-out
}
@media (max-width: 576px) {
 padding: 1rem;
}
`;

export const StyledProjectDescription = styled.div`
  padding: 1rem;
  color: #0D0C1D;
  font-size: 1.2rem;
  font-weigth: 350;

`;

export const StyledProjectTitle = styled.div`
  font-size: 2.5rem;
  text-shadow: 1px 1px #666666;
  font-weight: 350;
  padding: 1.25rem;
  @media (max-width: 576px) {
    font-size: 2rem;
  }
  color: #0D0C1D;
  &:hover {
    transform: scale(1.01); 
    transition: transform 0.3s ease-in-out
  }

`;

export const StyledProjectTools = styled.div`
  text-align: center;
  display: flex;
  justify-content: left;
  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;

  }

`;

export const StyledProjectTool = styled.div`
  background: #777777;
  color: #0D0C1D;
  padding: 1rem;
  margin-left: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  &:hover {
    transform: scale(1.05); 
    transition: transform 0.3s ease-in-out
  }
  @media (max-width: 576px) {
    margin-left: 0;
    margin: 1rem 3rem 0 3rem;
    padding: 01rem;
  }

`;