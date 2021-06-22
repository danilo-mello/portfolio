import styled from 'styled-components';

export const StyledContactForm = styled.div`

  
  
  @media (max-width: 576px) {
    width: 80%;
    margin-right: 0;

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
    height: 650px;
    width: 450px;
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
  }

  button {

    background-color: #333333;
    border: 2px solid #333333;
    font-weight: 300;
    border-radius: 7px;
    color: #999999;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.5rem;
    margin: 2rem 14rem 2rem 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    &:hover {
      color: #0D0C1D;
      background-color: #555555;
      transform: scale(1.01); 
      transition: transform 0.3s ease-in-out
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