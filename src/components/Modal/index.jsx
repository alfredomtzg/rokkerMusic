import React, { useState } from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line import/no-cycle
import Modal2 from "../Modal2/index";
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
  const [modalOn, setModalOn] = useState(false);

  const openModal = () => {
    setModalOn(true);
  };
  const closeModal = () => {
    setModalOn(false);
  };

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
          {/*      <button onClick={openModal} type="button">
 
          </button> */}
          <AddToPlaylist />

          <AddRemoveFromFavorites />
        </div>
      </StyledModal>
      <Modal2 modalOn={modalOn} closeModal={closeModal} />,
    </StyledModalContainer>,
    document.getElementById("modal")
  );
};

export default Modal;
