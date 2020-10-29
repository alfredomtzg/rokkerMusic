import React from "react";
import { PageContainer } from "../../containers/LayoutContainers";
import {
  FullPageCenterMsgBox,
  LoginOrSendButtonBox,
} from "../Globals/GlobalStyle";
import { HomeButton } from "../../components/Buttons";

const Page404 = () => {
  return (
    <PageContainer dark>
      <FullPageCenterMsgBox>
        <h1>Oops!</h1>
        <h5>Sometimes is better to turn backwards</h5>
        <p>Error 404</p>
        <LoginOrSendButtonBox>
          <HomeButton />
        </LoginOrSendButtonBox>
      </FullPageCenterMsgBox>
    </PageContainer>
  );
};

export default Page404;
