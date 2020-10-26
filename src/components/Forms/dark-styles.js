import styled from "styled-components";
import { Colors } from "../styles/globals";

// init Component Login styles

// Form Style
export const FormContainer = styled.form`
  flex-direction: column;
  display: flex;
  width: 100%;

  h6 {
    margin-bottom: 1vh;
    color: ${Colors.R500};
  }

  div {
    display: flex;
  }

  .NextBtn {
    justify-content: flex-end;
  }

  .LoginBtn,
  .SendBtn {
    justify-content: center;
    margin-top: 9vh;
  }

  a {
    color: ${Colors.G100};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
// Label style
export const TextLabel = styled.label`
  text-align: left;
  margin-bottom: 1rem;
  color: ${Colors.G100};
`;

// Input Style
export const TextInput = styled.input`
  padding: 1vh 2vw;
  box-sizing: border-box;
  border: 0.1rem solid ${Colors.G200};
  border-radius: 1rem;
  color: ${Colors.G700};
  background-color: ${Colors.G100};
  caret-color: ${Colors.G600};

  &:focus {
    outline: none;
  }
`;
