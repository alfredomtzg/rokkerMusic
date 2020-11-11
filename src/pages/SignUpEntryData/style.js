import styled from "styled-components";
import { Colors } from "../../components/styles/globals";

/* Const of buttons */
const StyledNextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 23.7rem;
  height: 4.5rem;
  border-radius: 1rem;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  background: ${Colors.R400};
  color: ${Colors.G100};
  &:active {
    background: ${Colors.R500};
  }
`;

const StyledSignUpTitle = styled.h2``;
const StyledSignUpSubtitle = styled.h5``;

export { StyledNextButton, StyledSignUpTitle, StyledSignUpSubtitle };
