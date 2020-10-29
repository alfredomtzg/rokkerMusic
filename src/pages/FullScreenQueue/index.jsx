import React from "react";
import { QueueReturn } from "../../components/Cards";
import PlaylistItem from "../../components/PlaylistItem";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { MiniPlayerAndNavContainer } from "../Globals/GlobalStyle";
import MinimizedPlayer from "../../components/minimizedPlayer";
import Footer from "../../components/Footer";
import { QueueBar, QueueList } from "./style";

const FullScreenQueue = () => {
  return (
    <PageContainer>
      <QueueBar>
        <QueueReturn />
      </QueueBar>
      <MainContainer>
        <QueueList>
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
        </QueueList>
      </MainContainer>
      <MiniPlayerAndNavContainer>
        <MinimizedPlayer />
        <Footer />
      </MiniPlayerAndNavContainer>
    </PageContainer>
  );
};

export default FullScreenQueue;
