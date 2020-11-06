import React from "react";
import ForgotPassForm from "../../components/FormForgotPassword";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { FormBox, TopTextBox } from "../Globals/GlobalStyle";

const LoginForgotPassword = () => {
  return (
    <PageContainer dark>
      <MainContainer>
        <TopTextBox>
          <h2>Forgot your password?</h2>
          <h5>
            Do not worry! give us your email <br />
            and we will be sending you <br />a new one
          </h5>
        </TopTextBox>
        <FormBox>
          <ForgotPassForm />
        </FormBox>
      </MainContainer>
    </PageContainer>
  );
};

export default LoginForgotPassword;
