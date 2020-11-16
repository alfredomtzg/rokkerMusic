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

export const PlaylistHeartDotsSong = ({
  title,
  index,
  url,
  artist_Name,
  startPlay,
  album_Image,
  arr,
}) => {
  const { setQueue } = useContext(Context);
  return (
    <StyledPlaylistItem>
      <StyledIconsLeft>
        <img src={album_Image} alt="Song Cover" />
        <StyledSongDescription
          onClick={() => {
            startPlay(title, url, index, artist_Name, album_Image);
            setQueue(arr);
          }}
        >
          <h6>{title}</h6>
          <p>{artist_Name}</p>
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
