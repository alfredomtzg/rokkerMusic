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
import Header from "../../components/header";
import { GenreCard, MidFilledCard, WideCard } from "../../components/Cards";
import MinimizedPlayer from "../../components/minimizedPlayer";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <GreetingBox />
        <FavoritesBox>
          <WideCard />
        </FavoritesBox>
        <h5>Recommended playlists</h5>
        <RecommendPlaylistsBox>
          <MidFilledCard />
          <MidFilledCard />
          <MidFilledCard />
          <MidFilledCard />
          <MidFilledCard />
          <MidFilledCard />
          <MidFilledCard />
        </RecommendPlaylistsBox>
        <h5>Playlists by genre</h5>
        <RecommendPlaylistsBox>
          <GenreCard />
          <GenreCard />
          <GenreCard />
          <GenreCard />
          <GenreCard />
          <GenreCard />
          <GenreCard />
        </RecommendPlaylistsBox>
        <PlaylistContentBox />
      </MainContainer>
      <MiniPlayerAndNavContainer>
        <MinimizedPlayer />
        <Footer />
      </MiniPlayerAndNavContainer>
    </PageContainer>
  );
};

export default Home;
