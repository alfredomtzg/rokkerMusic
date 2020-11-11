import styled from "styled-components";
import { Colors } from "../styles/globals";

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

export default StyledNextButton;
