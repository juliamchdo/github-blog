import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 70rem;

  input {
    flex: 1;
    border: 0;
    border-radius: 6px;
    background: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
