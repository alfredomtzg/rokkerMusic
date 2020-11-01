import React, { useState } from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line import/no-cycle
import Modal2 from "../Modal2/index";
import PlaylistItemDark from "../PlaylistItemDark";
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
        <button
          className="buttonClose"
          onClick={props.closeModal}
          type="button"
        >
          x
        </button>
        <PlaylistItemDark />
        <div>
          <button className="buttonItem" type="button">
            <AddToQueue />
          </button>
          <button className="buttonItem" type="button">
            <SeeArtistProfile />
          </button>

          <button className="buttonItem" onClick={openModal} type="button">
            <AddToPlaylist />
          </button>
          <button className="buttonItem" type="button">
            <AddRemoveFromFavorites />
          </button>
        </div>
      </StyledModal>
      <Modal2 modalOn={modalOn} closeModal={closeModal} />,
    </StyledModalContainer>,
    document.getElementById("modal")
  );
};

export default Modal;
