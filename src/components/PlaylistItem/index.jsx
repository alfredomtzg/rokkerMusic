import React, { useState } from "react";
// eslint-disable-next-line import/no-cycle
import Modal from "../Modal";
import {
  StyledPlaylistItem,
  StyledPlaylistItemDark,
  StyledIconsLeft,
  StyledSongDescription,
  StyledIconsRight,
} from "./styles";
import "../../assets/fonts/coolicons.css";
import Song from "../../assets/images/SongCoverFullPlayer.svg";

export const PlaylistItem = (props) => {
  const {} = props;
  const [modalOn, setModalOn] = useState(false);

  const openModal = () => {
    setModalOn(true);
  };

  const closeModal = () => {
    setModalOn(false);
  };

  return (
    <StyledPlaylistItem>
      <StyledIconsLeft>
        <img src={Song} alt="Song Cover" />
        <StyledSongDescription>
          <h6>Song title</h6>
          <p>Artist</p>
        </StyledSongDescription>
      </StyledIconsLeft>
      <StyledIconsRight>
        <button type="button">
          <i className="ci-heart_outline" />
        </button>
        <button onClick={openModal} type="button">
          <i className="ci-more_horizontal" />
        </button>
        <button type="button">
          <i className="ci-minus_circle" />
        </button>
      </StyledIconsRight>
      <Modal modalOn={modalOn} closeModal={closeModal} />
    </StyledPlaylistItem>
  );
};

export const PlaylistItemDark = () => {
  return (
    <StyledPlaylistItemDark>
      <img src={Song} alt="Song Cover" />
      <StyledSongDescription>
        <h6>Song title</h6>
        <p>Artist</p>
      </StyledSongDescription>
    </StyledPlaylistItemDark>
  );
};
