import React from "react";
import Header from "../../components/Header";
import PlaylistContainer from "../../components/PlaylistContainer";
import { PlaylistItem } from "../../components/PlaylistItem";
import MinimizedPlayer from "../../components/MinimizedPlayer";
import Footer from "../../components/Footer";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import {
  MiniPlayerAndNavContainer,
  PlaylistContentBox,
  TopBar,
} from "../Globals/GlobalStyle";
import { ArtistBox, StatsBox } from "./style";
import { ArtistProfileCard } from "../../components/Cards";

const ArtistProfile = () => {
  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <ArtistBox>
          <ArtistProfileCard />
        </ArtistBox>
        <PlaylistContentBox>
          <PlaylistContainer>
            <PlaylistItem />
            <PlaylistItem />
            <PlaylistItem />
            <PlaylistItem />
            <PlaylistItem />
          </PlaylistContainer>
        </PlaylistContentBox>
        <h4>Stats</h4>
        <StatsBox />
      </MainContainer>
      <MiniPlayerAndNavContainer>
        <MinimizedPlayer />
        <Footer />
      </MiniPlayerAndNavContainer>
    </PageContainer>
  );
};

export default ArtistProfile;
