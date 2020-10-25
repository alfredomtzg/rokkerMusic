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
<<<<<<< HEAD:src/components/Buttons/index.js
  StyledCancelButton,
  StyledTxtSaveButton,
  StyledEditButton,
  StyledImgEditButton,
=======
>>>>>>> bb3e985fc9dd1cca302af55073b417bad00d91a8:src/components/Buttons/index.jsx
} from "./style";

import "../../assets/fonts/coolicons.css";
import logoG from "../../assets/fonts/icons/btn_google_light_normal_ios.svg";
<<<<<<< HEAD:src/components/Buttons/index.js
=======
import playArrow from "../../assets/fonts/icons/play-arrow.svg";
>>>>>>> bb3e985fc9dd1cca302af55073b417bad00d91a8:src/components/Buttons/index.jsx

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
      <span>Sign in with Google</span>
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
<<<<<<< HEAD:src/components/Buttons/index.js
      <StyledImgPlayButton>
        <i className="ci-play_arrow"></i>
      </StyledImgPlayButton>
=======
      <StyledImgPlayButton src={playArrow} />
>>>>>>> bb3e985fc9dd1cca302af55073b417bad00d91a8:src/components/Buttons/index.jsx
      <h5>Play</h5>
    </StyledPlayButton>
  );
};
export const CancelButton = () => {
  return (
    <StyledCancelButton>
      <h5>Cancel</h5>
    </StyledCancelButton>
  );
};
export const TxtSaveButton = () => {
  return (
    <StyledTxtSaveButton>
      <h5>Save</h5>
    </StyledTxtSaveButton>
  );
};
export const EditButton = () => {
  return (
    <StyledEditButton>
      <StyledImgEditButton>
        <i className="ci-edit"></i>
      </StyledImgEditButton>
    </StyledEditButton>
  );
};
