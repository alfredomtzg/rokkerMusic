import React from "react";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import {
  TopBar,
  FormBox,
} from "../Globals/GlobalStyle";
import Header from "../../components/Header";
import CreatePlaylistBox from "./style";
import CreatePlaylistForm from "../../components/FormCreatePlaylist";

const PlaylistsCreate = () => {
  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <CreatePlaylistBox>
          <h1>Create Playlist</h1>
        </CreatePlaylistBox>
        <FormBox>
          <CreatePlaylistForm />
        </FormBox>
      </MainContainer>
    </PageContainer>
  );
};

export default PlaylistsCreate;
