import styled from 'styled-components';

export const StyledProjectsCard = styled.div`
  height: 420px;
  width: 654px;
  margin: 50px auto;
  border-radius: 7px 7px 7px 7px;
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
`;

export const StyledProjectImage = styled.div`
  float: left;
  height: 420px;
  width: 327px;
`;

export const StyledImage = styled.img`
  border-radius: 7px 0 0 7px;
`;

export const StyledProjectInfo = styled.div`
  float: left;
  height: 420px;
  width: 327px;
  border-radius: 0 7px 10px 7px;
  background-color: #ffffff;
`;

export const StyledProjectText = styled.div`

height: 300px;
width: 327px;


h1 {
  margin: 0 0 0 38px;
  padding-top: 52px;
  font-size: 34px;
  color: #474747;
}

h2 {
  margin: 0 0 47px 38px;
  font-size: 13px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  color: #d2d2d2;
  letter-spacing: 0.2em;
}

p {
  height: 125px;
  margin: 0 0 0 38px;
  font-family: 'Playfair Display', serif;
  color: #8d8d8d;
  line-height: 1.7em;
  font-size: 15px;
  font-weight: lighter;
  overflow: hidden;
}
`;

export const StyledProjectLinksSection = styled.div`
  height: 103px;
  width: 327px;
  margin-top: 17px;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const StyledProjectLink = styled.div`
  background-color: #333333;
  border: 2px solid #333333;
  border-radius: 7px;
  color: #999999;
  padding: 0 0;
  text-align: center;
  text-decoration: none;
  font-size: 1.2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    color: #222222;
    background-color: #555555;
    transform: scale(1.01); 
    transition: transform 0.3s ease-in-out
  }
`;