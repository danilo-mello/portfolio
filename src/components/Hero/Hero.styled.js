import styled from 'styled-components';

export const StyledHero = styled.div`

  
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }


  a {
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

  }
`;
