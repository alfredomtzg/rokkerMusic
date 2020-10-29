import React from "react";
import SignUpDemographicForm from "../../components/FormSignUpDemographics";
import Header from "../../components/Header";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { TopBar, TopTextBox, FormBox } from "../Globals/GlobalStyle";

const SignUpDemographics = () => {
  return (
    <PageContainer dark>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer dark>
        <TopTextBox>
          <h2>And Mike,</h2>
          <h5>So we can serve you better</h5>
        </TopTextBox>
        <FormBox>
          <SignUpDemographicForm />
        </FormBox>
      </MainContainer>
    </PageContainer>
  );
};

export default SignUpDemographics;
