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
      <TopBar />
      <MainContainer>
        <YourPlaylistsBox>
          <h1>Your playlists</h1>
        </YourPlaylistsBox>
        <NewAndFavoritesBox />
        <PlaylistsBox />
      </MainContainer>
      <MiniPlayerAndNavContainer />
    </PageContainer>
  );
};

export default PlaylistList;
