import styled from 'styled-components';

export const StyledContactForm = styled.div`

  
  
  @media (max-width: 576px) {
    width: 18rem;

  }

  background: linear-gradient(to top, #888888, #999999 );
  align-items: center;
  color: #EFFFFA;
  display: flex;
  justify-content: space-between
  flex-direction: row;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  opacity: 0.9;

  form {
    opacity: .80;
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: 36rem;
    width: 21rem;
    justify-content: space-between

    
  }

  border-radius: 25px;
  
  input {
    opacity: .80;
    margin-left: 1.5rem;
    font-weight: 300;
    margin-right: 1.5rem;
    height: 2.5rem;
    font-size: 1.25rem;
    border: 2px solid #999999;
    border-radius: 7px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    &:hover {
      transform: scale(1.01); 
      transition: transform 0.3s ease-in-out
    }
    @media (max-width: 576px) {
      margin-left: 1rem;
      margin-right: 1rem;
      
      width: 16rem;
      font-size: 1.25rem;

    }
  }
  textarea {
    opacity: .80;
    font-weight: 300;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    height: 6rem;
    resize: none;
    font-size: 1.5rem;
    border: 2px solid #999999;
    border-radius: 7px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    &:hover {
      transform: scale(1.01); 
      transition: transform 0.3s ease-in-out
    }
    @media (max-width: 576px) {
      margin-left: 1rem;
      margin-right: 1rem;
      width: 16rem;
      font-size: 1.25rem;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 300;
    padding-top: 2rem;
    padding-left: 1.5rem;
    color: #0D0C1D;
    &:hover {
      transform: scale(1.01); 
      transition: transform 0.3s ease-in-out
    }
    @media (max-width: 576px) {
      font-size: 1.5rem;

    }
  }

  button {

    background-color: #333333;
    border: 2px solid #333333;
    font-weight: 300;
    border-radius: 7px;
    color: #EFFFFA;
    padding: 1rem;
    text-align: center;
    width: 10rem;
    text-decoration: none;
    display: inline-block;
    font-size: 1.5rem;
    margin: 1rem 1rem 1.5rem 1.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    &:hover {
      color: #000000;
      background-color: #555555;
      transform: scale(1.01); 
      transition: transform 0.3s ease-in-out
    }
    @media (max-width: 576px) {
      margin 1rem;
      padding: 1rem;
  
    }
  }



  &:hover {
    transform: scale(1.01); 
    transition: transform 0.3s ease-in-out
  }

  }
`;

export const SuccessMessage = styled.div`
  background-color: #229344;
  color: white;
  text-align: center;
  border: 2px solid #229344;
  border-radius: 7px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  padding: 0.5rem 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

`

export const ErrorMessage = styled.div`
  background-color: #9b0000;
  color: white;
  text-align: center;
  border: 2px solid #9b0000;
  border-radius: 7px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  padding: 0.5rem 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

`