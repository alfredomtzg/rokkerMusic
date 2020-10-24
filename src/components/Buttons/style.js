import styled,{css} from "styled-components";
import { Colors } from "../styles/globals";

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
export const StyledNextButton = styled(StyledLoginButton)`
  width: 13, 8rem;
  color: ${Colors.G100};
`;
