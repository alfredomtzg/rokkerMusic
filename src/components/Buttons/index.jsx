import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  StyledFacebookButton,
  StyledGoogleButton,
  StyledSignupButton,
  StyledLoginButton,
  StyledNextButton,
  StyledSendButton,
  StyledHomeButton,
  StyledChangePassButton,
  StyledStatsButton,
  StyledSingOutButton,
  StyledSaveButton,
  StyledPlayButton,
  StyledCancelButton,
  StyledTxtSaveButton,
  StyledEditButton,
  StyledImgEditButton,
  StyledSearchButton,
  StyledDeletePlaylistButton,
  StyledHeartButton,
  StyledDotsButton,
  StyledDeleteButton,
  StyledRemoveQueueButton,
} from "./style";
import Modal from "../Modal";
import "../../assets/fonts/coolicons.css";

export const FacebookButton = () => {
  return (
    <StyledFacebookButton>
      <i className="ci-facebook" />
      <h5>Login with Facebook</h5>
    </StyledFacebookButton>
  );
};

export const GoogleButton = () => {
  return (
    <StyledGoogleButton>
      <img
        src="https://img.icons8.com/color/452/google-logo.png"
        alt="google logo"
      />
      <h5>Sign in with Google</h5>
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
export const HomeButton = () => {
  return (
    <StyledHomeButton>
      <Link to="/home">
        <h5>Home</h5>
      </Link>
    </StyledHomeButton>
  );
};
export const ChangePassButton = () => {
  return (
    <StyledChangePassButton>
      <Link to="settings/change-password">
        <h5>Change Password</h5>
      </Link>
    </StyledChangePassButton>
  );
};

export const StatsButton = () => {
  return (
    <StyledStatsButton>
      <Link to="settings/stats">
        <h5>Stats</h5>
      </Link>
    </StyledStatsButton>
  );
};

export const SingOutButton = () => {
  return (
    <StyledSingOutButton>
      <Link to="/signout">
        <h5>Sign Out</h5>
      </Link>
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
      <i className="ci-play_arrow" />
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
        <Link to="/playlist/edit">
          <i className="ci-edit" />
        </Link>
      </StyledImgEditButton>
    </StyledEditButton>
  );
};
export const SearchButton = () => {
  return (
    <StyledSearchButton>
      <StyledImgEditButton>
        <i className="ci-search" />
      </StyledImgEditButton>
    </StyledSearchButton>
  );
};
export const DeletePlaylistButton = () => {
  return (
    <StyledDeletePlaylistButton>
      <StyledImgEditButton>
        <i className="ci-trash_full" />
      </StyledImgEditButton>
    </StyledDeletePlaylistButton>
  );
};

// --------------------------------------------------------Buttons for song cards

export const HeartButton = () => {
  const addToFavorites = async () => {};
  return (
    <StyledHeartButton type="button" onClick={addToFavorites}>
      <i className="ci-heart_outline" />
    </StyledHeartButton>
  );
};

export const DotsButton = () => {
  const [modalOn, setModalOn] = useState(false);

  const openModal = () => {
    setModalOn(true);
  };

  const closeModal = () => {
    setModalOn(false);
  };

  return (
    <>
      <StyledDotsButton type="button" onClick={openModal}>
        <i className="ci-more_horizontal" />
      </StyledDotsButton>
      <Modal modalOn={modalOn} closeModal={closeModal} />
    </>
  );
};

export const DeleteButton = () => {
  const removeFromPlaylist = async () => {};
  return (
    <StyledDeleteButton type="button" onClick={removeFromPlaylist}>
      <i className="ci-minus_circle" />
    </StyledDeleteButton>
  );
};

export const RemoveQueueButton = () => {
  const removeFromQueue = async () => {};
  return (
    <StyledRemoveQueueButton onClick={removeFromQueue}>
      <i className="ci-minus" />
    </StyledRemoveQueueButton>
  );
};
