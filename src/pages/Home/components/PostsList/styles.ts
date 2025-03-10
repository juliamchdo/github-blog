import styled from "styled-components";

export const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const Post = styled.div`
  background-color: ${(props) => props.theme["base-post"]};
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 2rem;
  cursor: pointer;

  @media screen and (max-width: 1311px) {
    max-width: 70rem;
  }
  @media screen and (min-width: 1312px) {
    max-width: 34rem;
  }

  &:hover {
    border-color: ${(props) => props.theme["base-label"]};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;
    max-width: 70rem;

    h2 {
      font-size: 1.25rem;
      color: ${(props) => props.theme["base-title"]};
      line-height: 1.6;
    }
    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1rem;
  }
`;
