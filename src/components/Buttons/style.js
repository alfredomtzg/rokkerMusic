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
  background: #1a77f2;
  color: #fff;
  &:active {
    background: #005ad1;
  }
`;
export const StyledGoogleButton = styled(StyledButton)`
  display:flex;
  justify-content:space-around;
  align-items:center;
  background: #fff;
  border: 0.05rem solid #b3bac5;
  color: #7a869a;
  &:active {
    background: #FAFBFC;
  }
`;
export const StyledImgGoogleButton=styled.i`
  display:flex;
  justify-content:center;
  align-items:center;
  width:30px;
  height:30px;
  font-size:30px;

`;
export const StyledLoginButton = styled(StyledButton)`
  background: #FF5A6E;
  color: #FAFBFC;
  &:active {
    background: #F51E38;
  }
`;
export const StyledSignupButton = styled(StyledButton)`
  background: #6A57F1;
  color: #FAFBFC;
  &:active {
    background: #3E2AD1;
  }
`;
 export const StyledNextButton = styled(StyledLoginButton)`
  width:138px;
  color: #FAFBFC;
`; 
