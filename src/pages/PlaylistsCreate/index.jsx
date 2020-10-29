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
import Header from "../../components/Header";
import CreatePlaylistBox from "./style";
import CreatePlaylistForm from "../../components/FormCreatePlaylist";
import MinimizedPlayer from "../../components/MinimizedPlayer";
import Footer from "../../components/Footer";

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
      <MiniPlayerAndNavContainer>
        <MinimizedPlayer />
        <Footer />
      </MiniPlayerAndNavContainer>
    </PageContainer>
  );
};

export default PlaylistsCreate;
