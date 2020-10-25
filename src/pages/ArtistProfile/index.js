import React from "react";
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

const ArtistProfile = () => {
  return (
    <PageContainer>
      <TopBar></TopBar>
      <MainContainer>
        <ArtistBox></ArtistBox>
        <PlaylistContentBox></PlaylistContentBox>
        <StatsBox></StatsBox>
      </MainContainer>
      <MiniPlayerAndNavContainer></MiniPlayerAndNavContainer>
    </PageContainer>
  );
};

export default ArtistProfile;
