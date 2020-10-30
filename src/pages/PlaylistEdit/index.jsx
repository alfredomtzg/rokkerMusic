import React from "react";
import EditPlaylistForm from "../../components/FormEditPlaylist";
import Header from "../../components/Header";
import MinimizedPlayer from "../../components/MinimizedPlayer";
import PlaylistContainer from "../../components/PlaylistContainer";
import { PlaylistItem } from "../../components/PlaylistItem";
import Footer from "../../components/Footer";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import {
  MiniPlayerAndNavContainer,
  PlaylistContentBox,
  TopBar,
  FormBox,
} from "../Globals/GlobalStyle";

const PlaylistEdit = () => {
  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <FormBox>
          <EditPlaylistForm />
        </FormBox>
        <PlaylistContentBox>
          <PlaylistContainer>
            <PlaylistItem />
            <PlaylistItem />
            <PlaylistItem />
            <PlaylistItem />
            <PlaylistItem />
            <PlaylistItem />
            <PlaylistItem />
            <PlaylistItem />
          </PlaylistContainer>
        </PlaylistContentBox>
      </MainContainer>
      <MiniPlayerAndNavContainer>
        <MinimizedPlayer />
        <Footer />
      </MiniPlayerAndNavContainer>
    </PageContainer>
  );
};

export default PlaylistEdit;
