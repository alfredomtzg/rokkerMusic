/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
// eslint-disable-next-line import/no-cycle

import {
  StyledPlaylistItem,
  StyledIconsLeft,
  StyledSongDescription,
  StyledIconsRight,
} from "./styles";
import {
  HeartButton,
  DotsButton,
  DeleteButton,
  RemoveQueueButton,
} from "../Buttons";

import "../../assets/fonts/coolicons.css";
import Song from "../../assets/images/SongCoverFullPlayer.svg";
import { Context } from "../../utils/Context";

export const PlaylistHeartDotsSong = (props) => {
  // const { title, artist } = props;

  const {
    songData,
    setSongData,
    setPlayerStatus,
    setAutoplay,
    setTrack,
  } = useContext(Context);

  const startPlay = () => {
    setAutoplay(true);
    setPlayerStatus("play");
    setSongData({
      ...songData,
      songTitle: `${props.title}`,
      songURL: `${props.URL}`,
    });
    setTrack(props.index);
  };

  return (
    <StyledPlaylistItem>
      <StyledIconsLeft>
        <img src={Song} alt="Song Cover" />
        <StyledSongDescription onClick={startPlay}>
          <h6>{props.title}</h6>
          <p>{props.artist}</p>
        </StyledSongDescription>
      </StyledIconsLeft>
      <StyledIconsRight>
        <HeartButton />
        <DotsButton />
      </StyledIconsRight>
    </StyledPlaylistItem>
  );
};

export const PlaylistDeleteSong = (props) => {
  return (
    <StyledPlaylistItem>
      <StyledIconsLeft>
        <img src={Song} alt="Song Cover" />
        <StyledSongDescription>
          <h6>{props.title}</h6>
          <p>{props.artist}</p>
        </StyledSongDescription>
      </StyledIconsLeft>
      <StyledIconsRight>
        <DeleteButton />
      </StyledIconsRight>
    </StyledPlaylistItem>
  );
};

export const PlaylistRemoveQueueSong = (props) => {
  return (
    <StyledPlaylistItem>
      <StyledIconsLeft>
        <img src={Song} alt="Song Cover" />
        <StyledSongDescription>
          <h6>{props.title}</h6>
          <p>{props.artist}</p>
        </StyledSongDescription>
      </StyledIconsLeft>
      <StyledIconsRight>
        <RemoveQueueButton />
      </StyledIconsRight>
    </StyledPlaylistItem>
  );
};
