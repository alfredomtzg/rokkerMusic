import React from "react";
import { Link } from "react-router-dom";
import { PageContainer } from "../../containers/LayoutContainers";
import {
  FullPageCenterMsgBox,
  LoginOrSendButtonBox,
} from "../Globals/GlobalStyle";
import { LoginButton } from "../../components/Buttons";

const SettingsSignOut = () => {
  return (
    <PageContainer dark>
      <FullPageCenterMsgBox>
        <h1>Rokk you soon!</h1>
        <LoginOrSendButtonBox>
          <Link to="/">
            <LoginButton />
          </Link>
        </LoginOrSendButtonBox>
      </FullPageCenterMsgBox>
    </PageContainer>
  );
};

export default SettingsSignOut;
