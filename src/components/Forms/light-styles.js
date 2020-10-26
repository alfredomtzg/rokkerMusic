import styled from "styled-components";
import { Colors } from "../styles/globals";

// init Component Login styles

// Form Style
export const FormContainer = styled.form`
  flex-direction: column;
  display: flex;
  width: 33.5rem;

  h6 {
    margin-bottom: 1vh;
    color: ${Colors.R500};
  }

  div {
    display: flex;
  }

  .NextBtn,
  .SaveBtn {
    justify-content: flex-end;
    margin-top: 4vh;
  }

  .LoginBtn,
  .SendBtn {
    justify-content: center;
    margin-top: 9vh;
  }

  a {
    color: ${Colors.G600};
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
  color: ${Colors.G700};
`;

// Input Style
export const TextInput = styled.input`
  padding: 1vh 2vw;
  box-sizing: border-box;
  border: 0.1rem solid ${Colors.G400};
  border-radius: 1rem;
  color: ${Colors.G700};
  background-color: ${Colors.G100};
  caret-color: ${Colors.G700};
`;
