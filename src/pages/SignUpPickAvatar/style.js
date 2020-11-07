import styled from "styled-components";
import { Colors } from "../../components/styles/globals";

export const PickAvatarTextBox = styled.div`
  display: flex;
`;

export const AvatarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5vw;

  img {
    width: 10rem;
  }
`;

export const StyledForm = styled(AvatarsGrid)``;

export const StyledInput = styled.input`
  position: relative;
  left: 4rem;
  top: 0.5rem;
  &:checked + label {
    border-color: ${Colors.R500};
  }
`;

export const StyledLabel = styled.label`
  display: inline-block;
  width: 10rem;
  height: 10rem;
  border: 0.2rem solid ${Colors.G100};
  border-radius: 100%;
`;

/* Const of buttons */
export const StyledSendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
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

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
