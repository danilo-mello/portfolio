import styled from 'styled-components';

export const StyledPageNotFound = styled.div`

  
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
  background: ${({ theme }) => theme.primaryLight};
  align-items: center;
  color: ${({ theme }) => theme.primaryLight};
  display: flex;
  justify-content: center;

  a {
    font-size: 1.5rem;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
      transform: scale(1.05); 
      transition: transform 0.3s ease-in-out
    }
  }
`;
