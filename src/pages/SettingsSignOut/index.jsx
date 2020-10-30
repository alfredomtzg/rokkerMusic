import React from "react";
import { PageContainer } from "../../containers/LayoutContainers";
import {
  FullPageCenterMsgBox,
  LoginOrSendButtonBox,
} from "../Globals/GlobalStyle";
import { HomeButton } from "../../components/Buttons";

const SettingsSignOut = () => {
  return (
    <PageContainer dark>
      <FullPageCenterMsgBox>
        <h1>Rokk you soon!</h1>
        <LoginOrSendButtonBox>
          <HomeButton />
        </LoginOrSendButtonBox>
      </FullPageCenterMsgBox>
    </PageContainer>
  );
};

export default SettingsSignOut;
