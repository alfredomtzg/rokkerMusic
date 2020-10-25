import React from "react";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import {
  TopBar,
  MiniPlayerAndNavContainer,
  FormBox,
} from "../Globals/GlobalStyle";
import { CancelSaveBox, CreatePlaylistBox } from "./style";

const PlaylistsCreate = () => {
  return (
    <PageContainer>
      <TopBar />
      <MainContainer>
        <CancelSaveBox />
        <CreatePlaylistBox>
          <h1>Create Playlist</h1>
        </CreatePlaylistBox>
        <FormBox />
      </MainContainer>
      <MiniPlayerAndNavContainer />
    </PageContainer>
  );
};

export default PlaylistsCreate;
