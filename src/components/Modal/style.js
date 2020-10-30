import styled from "styled-components";
import { Colors } from "../styles/globals";

const StyledModal = styled.div`
  display: grid;
  gap: 3vh;
  height: 38vh;
  padding: 2rem;
  background-color: ${Colors.G700};

  button {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`;

export default StyledModal;
