import React from "react";
import {
  FavoritesCard,
  PlaylistCard,
  NewPlaylistCard,
} from "../../components/Cards";
import MinimizedPlayer from "../../components/minimizedPlayer";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import {
  MainContainer,
  PageContainer,
} from "../../containers/LayoutContainers";
import { MiniPlayerAndNavContainer, TopBar } from "../Globals/GlobalStyle";
import { YourPlaylistsBox, NewAndFavoritesBox, PlaylistsBox } from "./style";

const PlaylistList = () => {
  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <YourPlaylistsBox>
          <h1>Your playlists</h1>
        </YourPlaylistsBox>
        <NewAndFavoritesBox>
          <NewPlaylistCard />
          <FavoritesCard />
        </NewAndFavoritesBox>
        <PlaylistsBox>
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
        </PlaylistsBox>
      </MainContainer>
      <MiniPlayerAndNavContainer>
        <MinimizedPlayer />
        <Footer />
      </MiniPlayerAndNavContainer>
    </PageContainer>
  );
};

export default PlaylistList;
