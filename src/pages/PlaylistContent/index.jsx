import React from "react";
import { EditButton, PlayButton } from "../../components/Buttons";
import Header from "../../components/header";
import PlaylistContainer from "../../components/PlaylistContainer";
import PlaylistItem from "../../components/PlaylistItem";
import MinimizedPlayer from "../../components/minimizedPlayer";
import Footer from "../../components/Footer";
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
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <EditPlaylistButtonBox>
          <EditButton />
        </EditPlaylistButtonBox>
        <PlaylistCardAndTitleBox />
        <PlayButtonBox>
          <PlayButton />
        </PlayButtonBox>
        <PlaylistContentBox>
          <PlaylistContainer>
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

export default PlaylistContent;
