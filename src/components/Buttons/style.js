import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content:center;
  align-items:center;
  width: 237px;
  height: 45px;
  border-radius: 10px;
  outline: none;
  border: none;
  font-weight: 400;
`;
export const StyledFacebookButton = styled(StyledButton)`
  background: #1a77f2;
  color: #fff;
  &:active {
    background: #005ad1;
  }
`;
export const StyledGoogleButton = styled(StyledButton)`
  justify-content: space-around;
  background: #fff;
  border: 0.05rem solid #b3bac5;
  color: #7a869a;
  &:active {
    background: #fafbfc;
  }
`;
export const StyledImgGoogleButton = styled.i`
  width: 30px;
  height: 30px;
  font-size: 30px;
`;
export const StyledLoginButton = styled(StyledButton)`
  background: #ff5a6e;
  color: #fafbfc;
  &:active {
    background: #f51e38;
  }
`;
export const StyledSignupButton = styled(StyledButton)`
  background: #6a57f1;
  color: #fafbfc;
  &:active {
    background: #3e2ad1;
  }
`;
export const StyledNextButton = styled(StyledLoginButton)`
  width: 138px;
  color: #fafbfc;
`;
