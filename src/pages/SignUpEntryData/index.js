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

const SignUpEntryData = () => {
  return (
    <PageContainer dark>
      <TopBar></TopBar>
      <MainContainer>
        <TopTextBox>
          <h2>Welcome!</h2>
          <h5>Ready to rock with us?</h5>
        </TopTextBox>
        <FormBox></FormBox>
        <NextButtonBox></NextButtonBox>
      </MainContainer>
    </PageContainer>
  );
};

export default SignUpEntryData;
