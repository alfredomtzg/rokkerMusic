import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/login">
            <LoginButton />
          </Link>
        </LoginOrSendButtonBox>
      </FullPageCenterMsgBox>
    </PageContainer>
  );
};

export default SignUpCheckEmail;
