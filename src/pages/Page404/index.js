import React from "react";
import { PageContainer } from "../../containers/LayoutContainers";
import { FullPageCenterMsgBox } from "../Globals/GlobalStyle";

const Page404 = () => {
  return (
    <PageContainer dark>
      <FullPageCenterMsgBox>
        <h1>Oops!</h1>
        <h5>Sometimes is better to turn backwards</h5>
      </FullPageCenterMsgBox>
    </PageContainer>
  );
};

export default Page404;
