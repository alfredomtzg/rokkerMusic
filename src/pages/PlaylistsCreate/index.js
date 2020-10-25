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
      <TopBar></TopBar>
      <MainContainer>
        <CancelSaveBox></CancelSaveBox>
        <CreatePlaylistBox>
          <h1>Create Playlist</h1>
        </CreatePlaylistBox>
        <FormBox></FormBox>
      </MainContainer>
      <MiniPlayerAndNavContainer></MiniPlayerAndNavContainer>
    </PageContainer>
  );
};

export default PlaylistsCreate;
