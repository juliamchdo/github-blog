import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1311px) {
    padding: 0 2rem;
  }
  @media screen and (min-width: 1312px) {
    padding: 0 6rem;
  }
`;
