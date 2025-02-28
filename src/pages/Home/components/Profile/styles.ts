import styled from "styled-components";

export const ProfileContainer = styled.div`
  background: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  margin-top: -5rem;
  margin-bottom: 4.5rem;
  padding: 2.5rem 2rem;

  @media screen and (max-width: 681px) {
    max-width: 50rem;

    > div {
      flex-direction: column;
    }
  }

  @media screen and (min-width: 682px) {
    max-width: 70rem;

    > div {
      flex-direction: row;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
`;

export const ProfilePhoto = styled.img`
  border-radius: 8px;
  max-width: 9rem;
`;

export const ProfileTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 1.5rem;
    line-height: 1.6;
  }

  a {
    font-size: 0.75rem;
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => props.theme["blue"]};
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.2s ease-in-out;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a:hover {
    border-bottom: 1px solid ${(props) => props.theme["blue"]};
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
    line-height: 1.6;
  }
`;

export const ProfileLinks = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;

  span {
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
