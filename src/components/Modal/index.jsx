import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line import/no-cycle
import { PlaylistItemDark } from "../PlaylistItem";
import { StyledModal, StyledModalContainer } from "./style";
import {
  AddToQueue,
  SeeArtistProfile,
  AddToPlaylist,
  AddRemoveFromFavorites,
} from "../Cards";

const Modal = (props) => {
  if (!props.modalOn) {
    return null;
  }

  return ReactDOM.createPortal(
    <StyledModalContainer>
      <StyledModal>
        <button onClick={props.closeModal} type="button">
          x
        </button>
        <PlaylistItemDark />
        <div>
          <AddToQueue />
          <SeeArtistProfile />
          <AddToPlaylist />
          <AddRemoveFromFavorites />
        </div>
      </StyledModal>
    </StyledModalContainer>,
    document.getElementById("modal")
  );
};

export default Modal;
