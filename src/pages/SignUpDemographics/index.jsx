import React, { useContext } from "react";
import SignUpDemographicForm from "../../components/FormSignUpDemographics";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { TopTextBox, FormBox } from "../Globals/GlobalStyle";
import { Context } from "../../utils/Context";

const SignUpDemographics = () => {
  const { user } = useContext(Context);
  return (
    <PageContainer dark>
      <MainContainer dark>
        <TopTextBox>
          <h2>And {user?.name},</h2>
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
