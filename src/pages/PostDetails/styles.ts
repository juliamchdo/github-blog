import styled from "styled-components";

export const PostContainer = styled.main`
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

export const PostHeader = styled.div`
  background: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  margin-top: -5rem;
  margin-bottom: 4.5rem;
  padding: 2.5rem 2rem;
  width: 70rem;

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 1.5rem;
  }
`;

export const PostHeaderActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  span {
    color: ${(props) => props.theme.blue};
    font-size: 0%.75rem;
    font-weight: bold;
    text-transform: uppercase;

    display: flex;
    gap: 0.5rem;
  }
`;

export const PostHeaderLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1.5rem;
  margin-top: 0.75rem;

  > span {
    display: flex;
    gap: 0.5rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1rem;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
