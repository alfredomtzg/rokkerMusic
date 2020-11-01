import React from "react";
import userAvatar from "../../assets/images/avatars/Alexander.svg";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { TopBar } from "../Globals/GlobalStyle";
import { UserAvatarBox } from "../Settings/style";
import Header from "../../components/Header";
import { StatsBox } from "./style";

const SettingsStats = () => {
  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <UserAvatarBox>
          <img src={userAvatar} alt="user avatar" />
        </UserAvatarBox>
        <h3>Stats</h3>
        <StatsBox
          title="myStats"
          src="https://datastudio.google.com/embed/reporting/fd663400-4bc9-4269-b06e-6031b26447a7/page/I1hmB"
        />
      </MainContainer>
    </PageContainer>
  );
};

export default SettingsStats;
