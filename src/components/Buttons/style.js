import styled from "styled-components";
import { Colors } from "../styles/globals";

/* Const of buttons */
export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23.7rem;
  height: 4.5rem;
  border-radius: 1rem;
  outline: none;
  border: none;
  padding: 0;
`;

/* Button particular characters */
export const StyledFacebookButton = styled(StyledButton)`
  background: ${Colors.facebookInactive};
  color: ${Colors.white};
  &:active {
    background: ${Colors.facebookActive};
  }
`;

export const StyledGoogleButton = styled(StyledButton)`
  justify-content: space-around;
  background: ${Colors.white};
  border: 0.05rem solid ${Colors.G400};
  color: ${Colors.G600};
  &:active {
    background: ${Colors.G100};
  }
`;

export const StyledImgGoogleButton = styled.img`
  width: 3rem;
  height: 3rem;
  background-size: cover;
`;

export const StyledLoginButton = styled(StyledButton)`
  background: ${Colors.R400};
  color: ${Colors.G100};
  &:active {
    background: ${Colors.R500};
  }
`;

export const StyledSignupButton = styled(StyledButton)`
  background: ${Colors.B400};
  color: ${Colors.G100};
  &:active {
    background: ${Colors.B500};
  }
`;

export const StyledSendButton = styled(StyledButton)`
  background: ${Colors.R400};
  color: ${Colors.G100};
  &:active {
    background: ${Colors.R500};
  }
`;

export const StyledChangePassButton = styled(StyledButton)`
  background: ${Colors.R400};
  color: ${Colors.G100};
  &:active {
    background: ${Colors.R500};
  }
`;

export const StyledSingOutButton = styled(StyledButton)`
  background: ${Colors.R400};
  color: ${Colors.G100};
  &:active {
    background: ${Colors.R500};
  }
`;

/* Buttons Mid */
export const StyledNextButton = styled(StyledLoginButton)`
  width: 13.8rem;
  color: ${Colors.G100};
`;

export const StyledSaveButton = styled(StyledNextButton)``;
export const StyledPlayButton = styled(StyledNextButton)``;
export const StyledImgPlayButton = styled.img`
  width: 1.1rem;
  height: 1.4rem;
  background-size: cover;
  position: absolute;
  left: 1rem;
`;
