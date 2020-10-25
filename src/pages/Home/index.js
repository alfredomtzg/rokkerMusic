import React from "react";
import {
  MainContainer,
  PageContainer,
} from "../../containers/LayoutContainers";
import {
  MiniPlayerAndNavContainer,
  TopBar,
  PlaylistContentBox,
} from "../Globals/GlobalStyle";
import { GreetingBox, FavoritesBox, RecommendPlaylistsBox } from "./style";

const Home = () => {
  return (
    <PageContainer>
      <TopBar></TopBar>
      <MainContainer>
        <GreetingBox></GreetingBox>
        <FavoritesBox></FavoritesBox>
        <h5>Recommended playlists</h5>
        <RecommendPlaylistsBox></RecommendPlaylistsBox>
        <h5>Playlists by genre</h5>
        <RecommendPlaylistsBox></RecommendPlaylistsBox>
        <PlaylistContentBox></PlaylistContentBox>
      </MainContainer>
      <MiniPlayerAndNavContainer></MiniPlayerAndNavContainer>
    </PageContainer>
  );
};

export default Home;
