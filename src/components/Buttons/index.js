import React from "react";
import {
  StyledFacebookButton,
  StyledGoogleButton,
  StyledSignupButton,
  StyledLoginButton,
  StyledNextButton,
  StyledImgGoogleButton,
  
} from "./style";

import  '../../assets/fonts/coolicons.css'
import logoG from '../../assets/fonts/icons/btn_google_light_normal_ios.svg'

export const FacebookButton = () => {
  return (
    <StyledFacebookButton>
      <h5>Login with Facebook</h5>
    </StyledFacebookButton>
  );
};

export const GoogleButton = () => {
  return (
    <StyledGoogleButton>
      <StyledImgGoogleButton src={logoG} />
      <h6>Sign in with Google</h6>
    </StyledGoogleButton>
  );
};

export const SignupButton = () => {
  return (
    <StyledSignupButton>
      <h5>Sign up</h5>
    </StyledSignupButton>
  );
};

export const LoginButton = () => {
  return (
    <StyledLoginButton>
      <h5>Login</h5>
    </StyledLoginButton>
  );
};

export const NextButton = () => {
  return (
    <StyledNextButton>
      <h5>Next</h5>
    </StyledNextButton>
  );
};
