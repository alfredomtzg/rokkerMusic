import React from "react";
import {
  MainContainer,
  PageContainer,
} from "../../containers/LayoutContainers";
import { MiniPlayerAndNavContainer, TopBar } from "../Globals/GlobalStyle";
import { YourPlaylistsBox, NewAndFavoritesBox, PlaylistsBox } from "./style";

const PlaylistList = () => {
  return (
    <PageContainer>
      <TopBar></TopBar>
      <MainContainer>
        <YourPlaylistsBox>
          <h1>Your playlists</h1>
        </YourPlaylistsBox>
        <NewAndFavoritesBox></NewAndFavoritesBox>
        <PlaylistsBox></PlaylistsBox>
      </MainContainer>
      <MiniPlayerAndNavContainer></MiniPlayerAndNavContainer>
    </PageContainer>
  );
};

export default PlaylistList;
