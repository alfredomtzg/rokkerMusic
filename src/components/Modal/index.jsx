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

<<<<<<< HEAD
const ModalCard = () => {
  return (
    <StyledModal>
      {/* <button type="button">X</button> */}
      <PlaylistItemDark />
      <div>
        <AddToQueue/>
        <SeeArtistProfile />
        <AddToPlaylist />
        <AddRemoveFromFavorites />
      </div>
    </StyledModal>
=======
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
>>>>>>> 0d03fd04cf49d0d5674d8af3d45b2b0475451059
  );
};

export default ModalCard;
