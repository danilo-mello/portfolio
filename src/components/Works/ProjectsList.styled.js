import styled from 'styled-components';

export const StyledProjectsList = styled.div`

  justify-content: center;
  align-items: center;
  width: 65rem;
  padding: 2rem;
  @media (max-width: 576px) {
    width: 17rem;
    padding: 0rem;
  }
  @media (min-width: 576px) {
    animation-duration: 1s;
    animation-name: slidein;
    @keyframes slidein {
      from {
        padding-left: 8rem;
      to {
        padding-left: 0rem;
      }
    }
  }
`;
