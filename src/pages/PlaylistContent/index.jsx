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
      <TopBar />
      <MainContainer>
        <EditPlaylistButtonBox />
        <PlaylistCardAndTitleBox />
        <PlayButtonBox />
        <PlaylistContentBox />
      </MainContainer>
      <MiniPlayerAndNavContainer />
    </PageContainer>
  );
};

export default PlaylistContent;
