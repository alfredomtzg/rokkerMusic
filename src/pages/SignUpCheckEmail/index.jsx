import React from "react";
import { LoginButton } from "../../components/Buttons";
import { PageContainer } from "../../containers/LayoutContainers";
import {
  FullPageCenterMsgBox,
  LoginOrSendButtonBox,
} from "../Globals/GlobalStyle";

const SignUpCheckEmail = () => {
  return (
    <PageContainer dark>
      <FullPageCenterMsgBox>
        <h1>Rokk It!!!</h1>
        <h3>Please check your email</h3>
        <LoginOrSendButtonBox>
          <LoginButton />
        </LoginOrSendButtonBox>
      </FullPageCenterMsgBox>
    </PageContainer>
  );
};

export default SignUpCheckEmail;
