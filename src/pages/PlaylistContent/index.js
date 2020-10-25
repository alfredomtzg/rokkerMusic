import React from "react";
import {
  MainContainer,
  PageContainer,
} from "../../containers/LayoutContainers";
import {
  MiniPlayerAndNavContainer,
  PlaylistContentBox,
  TopBar,
} from "../Globals/GlobalStyle";
import {
  EditPlaylistButtonBox,
  PlaylistCardAndTitleBox,
  PlayButtonBox,
} from "./style";

const PlaylistContent = () => {
  return (
    <PageContainer>
      <TopBar></TopBar>
      <MainContainer>
        <EditPlaylistButtonBox></EditPlaylistButtonBox>
        <PlaylistCardAndTitleBox></PlaylistCardAndTitleBox>
        <PlayButtonBox></PlayButtonBox>
        <PlaylistContentBox></PlaylistContentBox>
      </MainContainer>
      <MiniPlayerAndNavContainer></MiniPlayerAndNavContainer>
    </PageContainer>
  );
};

export default PlaylistContent;
