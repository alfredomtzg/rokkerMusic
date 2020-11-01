/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
// eslint-disable-next-line import/no-cycle
import Modal from "../Modal";
import {
  StyledPlaylistItem,
  StyledIconsLeft,
  StyledSongDescription,
  StyledIconsRight,
  HeartButton,
  DotsButton,
  DeleteButton,
} from "./styles";
import "../../assets/fonts/coolicons.css";
import Song from "../../assets/images/SongCoverFullPlayer.svg";

export const PlaylistItem = (props) => {
  const { title, artist } = props;
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
          <h6> {title}</h6>
          <p>{artist}</p>
        </StyledSongDescription>
      </StyledIconsLeft>
      <StyledIconsRight>
        <HeartButton type="button">
          <i className="ci-heart_outline" />
        </HeartButton>
        <DotsButton onClick={openModal} type="button">
          <i className="ci-more_horizontal" />
        </DotsButton>
        <DeleteButton type="button">
          <i className="ci-minus_circle" />
        </DeleteButton>
      </StyledIconsRight>
      <Modal modalOn={modalOn} closeModal={closeModal} />
    </StyledPlaylistItem>
  );
};

export default withRouter(PlaylistItem);
