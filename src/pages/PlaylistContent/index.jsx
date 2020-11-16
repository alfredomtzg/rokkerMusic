import React, { useEffect, useContext } from "react";
import { EditButton, PlayButton } from "../../components/Buttons";
import Header from "../../components/Header";
import PlaylistContainer from "../../components/PlaylistContainer";
import {
  MainContainer,
  PageContainer,
} from "../../containers/LayoutContainers";
import { PlaylistContentBox, TopBar } from "../Globals/GlobalStyle";
import {
  EditPlaylistButtonBox,
  PlaylistCardAndTitleBox,
  PlayButtonBox,
} from "./style";
import { PlaylistBigCard } from "../../components/Cards";
import { Context } from "../../utils/Context";
// Axios
import { API } from "../../route/axios";
import Axios from "axios";

const PlaylistContent = () => {
  const {
    albumContent,
    user,
    setQueue,
    queuePlaylist,
    setQueuePlaylist,
  } = useContext(Context);
  const bringAlbumById = async () => {
    try {
      const response = await Axios.get(
        `https://rokker-music-app-test.herokuapp.com/api/track/album/${albumContent._id}`
      );
      console.log(`------------------------ `);

      console.log(response.data.body[0].tracks);
      setQueuePlaylist(
        [...response.data.body[0].tracks].filter((item) => item.url !== null)
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    bringAlbumById();
  }, []);

  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <EditPlaylistButtonBox>
          <EditButton />
        </EditPlaylistButtonBox>
        <PlaylistCardAndTitleBox>
          <PlaylistBigCard />
        </PlaylistCardAndTitleBox>
        <PlayButtonBox>
          <PlayButton />
        </PlayButtonBox>
        <PlaylistContentBox>
          <PlaylistContainer />
        </PlaylistContentBox>
      </MainContainer>
    </PageContainer>
  );
};

export default PlaylistContent;
