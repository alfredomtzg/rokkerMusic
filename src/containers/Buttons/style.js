import styled from "styled-components";

export const StyledButton = styled.button`
  width: 237px;
  height: 45px;
  border-radius: 10px;
  outline: none;
  border: none;
  font-weight: 400;
`;
export const StyledFacebookButton = styled(StyledButton)`
  font-size: 18px;
  background: #1a77f2;
  color: #fff;
  &:active {
    background: #005ad1;
  }
`;
export const StyledGoogleButton = styled(StyledButton)`
  background: #fff;
  border: 0.5px solid #b3bac5;
  font-size: 16px;
  color: #7a869a;
  &:active {
    background: #FAFBFC;
  }
`;
export const StyledLoginButton = styled(StyledButton)`
  background: #FF5A6E;
  font-size:18px;
  color: #FAFBFC;
  &:active {
    background: #F51E38;
  }
`;
export const StyledSignupButton = styled(StyledButton)`
  background: #6A57F1;
  font-size: 18px;
  color: #FAFBFC;
  &:active {
    background: #3E2AD1;
  }
`;
export const StyledNextButton = styled(StyledLoginButton)`
  width:138px;
  font-size: 18px;
  color: #FAFBFC;
`;
