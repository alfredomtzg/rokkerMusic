import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line import/no-cycle
import { PlaylistItemDark } from "../PlaylistItem";
import { StyledModal, StyledModalContainer } from "./style";
import PlaylistTitle from "../PlayListTitle/index";

const Modal2 = (props) => {
    
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
        <h5>Add to</h5>
        <div>
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
        </div>
      </StyledModal>
    </StyledModalContainer>,
    document.getElementById("modalSH")
  );
};

export default Modal2;
