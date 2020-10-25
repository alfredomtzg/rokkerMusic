import React from "react";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import {
  TopBar,
  TopTextBox,
  NextButtonBox,
  FormBox,
} from "../Globals/GlobalStyle";

const SignUpDemographics = () => {
  return (
    <PageContainer dark>
      <TopBar></TopBar>
      <MainContainer dark>
        <TopTextBox>
          <h2>And Mike,</h2>
          <h5>So we can serve you better</h5>
        </TopTextBox>
        <FormBox></FormBox>
        <NextButtonBox></NextButtonBox>
      </MainContainer>
    </PageContainer>
  );
};

export default SignUpDemographics;
