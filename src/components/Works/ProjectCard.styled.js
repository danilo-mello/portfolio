import styled from 'styled-components';

export const StyledProjectsCard = styled.div`
  margin: 50px auto;
  border-radius: 25px;
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  background: linear-gradient(to top, #888888, #999999 );
  opacity: 0.9;
  width: 1200px;
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
  border-radius: 7px;
`;

export const StyledProjectLinksSection = styled.div`
  margin-top: 17px;
  margin-bottom: 17px;
  padding: 1rem;

  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const StyledProjectLink = styled.a`
text-decoration: none;
background-color: #333333;
border: 2px solid #333333;
font-weight: 300;
border-radius: 7px;
color: #999999;
padding: 15px 32px;
text-align: center;
display: inline-block;
font-size: 1.5rem;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
cursor: pointer;
&:hover {
  color: #0D0C1D;
  background-color: #555555;
  transform: scale(1.01); 
  transition: transform 0.3s ease-in-out
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
    font-size: 3.5rem;
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
`;

export const StyledProjectTool = styled.div`
  background: #777777;
  color: #0D0C1D;
  padding: 1rem;
  margin-left: 2rem;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  &:hover {
    transform: scale(1.05); 
    transition: transform 0.3s ease-in-out
  }

`;