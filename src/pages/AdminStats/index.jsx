import React from "react";
import userAvatar from "../../assets/images/avatars/Claudia.svg";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { TopBar } from "../Globals/GlobalStyle";
import { UserAvatarBox } from "../Settings/style";
import Header from "../../components/Header";
import { StatsBox } from "./style";

const AdminStats = () => {
  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <UserAvatarBox>
          <img src={userAvatar} alt="admin avatar" />
        </UserAvatarBox>
        <h2>Hi suuper Admin!</h2>
        <h5>Check how loved is your app:</h5>
        <StatsBox
          title="appStats"
          src="https://datastudio.google.com/embed/reporting/20f17f91-4115-40ff-b6e2-becd773dbbb4/page/2cnmB"
        />
      </MainContainer>
    </PageContainer>
  );
};

export default AdminStats;
