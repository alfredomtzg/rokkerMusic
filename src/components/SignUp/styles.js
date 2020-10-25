import styled from "styled-components";
import { Colors } from "../styles/globals";

// init Component Login styles

// Form Style
export const FormContainer = styled.form`
  flex-direction: column;
  display: flex;
  width: 33.5rem;
`;
// Label style
export const TextLabel = styled.label`
  text-align: left;
  color: ${Colors.G100};
`;

// Input Style
export const TextInput = styled.input`
  background: ${Colors.G100};
  border: 0.1rem solid ${Colors.G200};
  box-sizing: border-box;
  border-radius: 1rem;
`;
