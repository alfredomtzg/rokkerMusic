import React from "react";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { TopBar, TopTextBox, NextButtonBox } from "../Globals/GlobalStyle";
import { AvatarsGrid } from "./style";

const SingUpPickAvatar = () => {
  return (
    <PageContainer dark>
      <TopBar />
      <MainContainer>
        <TopTextBox>
          <h2>Mike</h2>
          <h5>Pick your avatar</h5>
        </TopTextBox>
        <AvatarsGrid />
        <NextButtonBox />
      </MainContainer>
    </PageContainer>
  );
};

export default SingUpPickAvatar;
