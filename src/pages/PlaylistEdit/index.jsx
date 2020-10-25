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
import { CancelSaveBox } from "../PlaylistsCreate/style";
import { PlaylistsBox } from "../PlaylistsList/style";

const PlaylistEdit = () => {
  return (
    <PageContainer>
      <TopBar />
      <MainContainer>
        <CancelSaveBox />
        <PlaylistsBox />
        <PlaylistContentBox />
      </MainContainer>
      <MiniPlayerAndNavContainer />
    </PageContainer>
  );
};

export default PlaylistEdit;
