import React from "react";
import Header from "../../components/header";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import {
  TopBar,
  MiniPlayerAndNavContainer,
  FormBox,
  NextButtonBox,
} from "../Globals/GlobalStyle";
import { UserAvatarBox } from "../Settings/style";
import Avatar from "../../assets/images/avatars/Alexander.svg";
import NewPassForm from "../../components/FormChangePassword";
import MinimizedPlayer from "../../components/minimizedPlayer";
import Footer from "../../components/Footer";

const SettingsChangePassword = () => {
  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <UserAvatarBox>
          <img src={Avatar} alt="avatar" />
        </UserAvatarBox>
        <FormBox>
          <NewPassForm />
        </FormBox>
        <NextButtonBox />
      </MainContainer>
      <MiniPlayerAndNavContainer>
        <MinimizedPlayer />
        <Footer />
      </MiniPlayerAndNavContainer>
    </PageContainer>
  );
};

export default SettingsChangePassword;
