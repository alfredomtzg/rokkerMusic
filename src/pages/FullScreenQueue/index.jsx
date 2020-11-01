import React from "react";
import { QueueReturn } from "../../components/Cards";
import { PlaylistItem } from "../../components/PlaylistItem";
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
    </PageContainer>
  );
};

export default FullScreenQueue;
