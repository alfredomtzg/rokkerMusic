import React from "react";
import { PlaylistItemDark } from "../PlaylistItem";
import StyledModal from "./style";
import {
  AddToQueue,
  SeeArtistProfile,
  AddToPlaylist,
  AddRemoveFromFavorites,
} from "../Cards";

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
  );
};

export default ModalCard;
