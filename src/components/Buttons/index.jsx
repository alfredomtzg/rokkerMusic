import React from "react";
import {
  StyledFacebookButton,
  StyledGoogleButton,
  StyledSignupButton,
  StyledLoginButton,
  StyledNextButton,
  StyledImgGoogleButton,
  StyledSendButton,
  StyledChangePassButton,
  StyledSingOutButton,
  StyledSaveButton,
  StyledPlayButton,
  StyledImgPlayButton,
} from "./style";

import "../../assets/fonts/coolicons.css";
import logoG from "../../assets/fonts/icons/btn_google_light_normal_ios.svg";
import playArrow from "../../assets/fonts/icons/play-arrow.svg";

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
export const SendButton = () => {
  return (
    <StyledSendButton>
      <h5>Send</h5>
    </StyledSendButton>
  );
};
export const ChangePassButton = () => {
  return (
    <StyledChangePassButton>
      <h5>Change Password</h5>
    </StyledChangePassButton>
  );
};
export const SingOutButton = () => {
  return (
    <StyledSingOutButton>
      <h5>Sign Out</h5>
    </StyledSingOutButton>
  );
};
export const NextButton = () => {
  return (
    <StyledNextButton>
      <h5>Next</h5>
    </StyledNextButton>
  );
};
export const SaveButton = () => {
  return (
    <StyledSaveButton>
      <h5>Save</h5>
    </StyledSaveButton>
  );
};
export const PlayButton = () => {
  return (
    <StyledPlayButton>
      <StyledImgPlayButton src={playArrow} />
      <h5>Play</h5>
    </StyledPlayButton>
  );
};
