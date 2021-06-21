import styled from 'styled-components';

export const StyledFooter = styled.div`
  text-align: center;
  padding: 1rem;
  color: #EFFFFA;

  
`;


export const StyledFooterLinks = styled.div`

  padding: 1rem;

`;

export const StyledFooterLink = styled.a`
  text-decoration: none;
  color: #EFFFFA;
  font-size: 1.25rem;
  letter-spacing: 1px;

  &:hover {
    transform: scale(1.05); 
    transition: transform 0.3s ease-in-out;
  }
`;

export const StyledFooterCR = styled.div`
  color: #EFFFFA;
  font-size: 1.25rem;
  font-weigth: 300;
  letter-spacing: 1px;
`;