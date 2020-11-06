import React from "react";
import { PageContainer } from "../../containers/LayoutContainers";
import {
  FullPageCenterMsgBox,
  LoginOrSendButtonBox,
} from "../Globals/GlobalStyle";
import { HomeButton } from "../../components/Buttons";

const NotRegisteredUser = () => {
  return (
    <PageContainer dark>
      <FullPageCenterMsgBox>
        <h1>Oops!</h1>
        <h5>Sometimes is better go to Login</h5>
        <p>Error 404</p>
        <LoginOrSendButtonBox>
          <HomeButton login="true" />
        </LoginOrSendButtonBox>
      </FullPageCenterMsgBox>
    </PageContainer>
  );
};

export default NotRegisteredUser;
