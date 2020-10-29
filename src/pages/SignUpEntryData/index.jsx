import React from "react";
import Header from "../../components/Header";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { TopBar, TopTextBox, FormBox } from "../Globals/GlobalStyle";
import SignUpEntryDataForm from "../../components/FormSignUp";

const SignUpEntryData = () => {
  return (
    <PageContainer dark>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <TopTextBox>
          <h2>Welcome!</h2>
          <h5>Ready to rock with us?</h5>
        </TopTextBox>
        <FormBox>
          <SignUpEntryDataForm />
        </FormBox>
      </MainContainer>
    </PageContainer>
  );
};

export default SignUpEntryData;
