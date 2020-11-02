import React from "react";
import { QueueReturn } from "../../components/Cards";
import { PlaylistRemoveQueueSong } from "../../components/PlaylistItem";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { QueueBar, QueueList } from "./style";

const FullScreenQueue = () => {
  return (
    <PageContainer>
      <QueueBar>
        <QueueReturn />
      </QueueBar>
      <MainContainer>
        <QueueList>
          <PlaylistRemoveQueueSong />
          <PlaylistRemoveQueueSong />
          <PlaylistRemoveQueueSong />
          <PlaylistRemoveQueueSong />
          <PlaylistRemoveQueueSong />
          <PlaylistRemoveQueueSong />
          <PlaylistRemoveQueueSong />
          <PlaylistRemoveQueueSong />
          <PlaylistRemoveQueueSong />
          <PlaylistRemoveQueueSong />
          <PlaylistRemoveQueueSong />
          <PlaylistRemoveQueueSong />
        </QueueList>
      </MainContainer>
    </PageContainer>
  );
};

export default FullScreenQueue;
