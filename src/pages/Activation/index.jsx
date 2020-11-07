import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { TopTextBox, LoginOrSendButtonBox } from "../Globals/GlobalStyle";
import { LoginButton, HomeButton } from "../../components/Buttons";
import { API, auth } from "../../route/axios";

const Activation = () => {
  const { id } = useParams();
  const history = useHistory();

  const [active, setActive] = useState(false);

  const autenticacion = async () => {
    const response = await API.get(`${auth}?id=${id}`);
    console.log(response);
    if (response.status === 201) {
      setActive(true);
    }
  };

  useEffect(() => {
    autenticacion();
  }, []);

  return (
    <PageContainer dark>
      {active ? (
        <MainContainer>
          <TopTextBox>
            <h2>Welcome aboard!</h2>
            <h5>Your account is now active</h5>
          </TopTextBox>
          <LoginOrSendButtonBox>
            <Link to="/login">
              <LoginButton />
            </Link>
          </LoginOrSendButtonBox>
        </MainContainer>
      ) : (
        <MainContainer>
          <TopTextBox>
            <h2>Somentingh went wrong</h2>
          </TopTextBox>
          <LoginOrSendButtonBox>
            <Link to="/">
              <HomeButton login="true" />
            </Link>
          </LoginOrSendButtonBox>
        </MainContainer>
      )}
    </PageContainer>
  );
};

export default Activation;
