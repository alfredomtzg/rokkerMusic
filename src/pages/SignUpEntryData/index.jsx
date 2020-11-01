import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { TopBar, TopTextBox, FormBox } from "../Globals/GlobalStyle";
import SignUpEntryDataForm from "../../components/FormSignUp";
import SignUpPickAvatar from "../SignUpPickAvatar";

const SignUpEntryData = () => {
  const [page, setPage] = useState(true);
  // SignUp Values
  const [valuesSignUp, setValuesSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    age: "",
    gender: "",
    avatarPath: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // const user = {
    //   name: valuesSignUp.name,
    //   lastname: "default",
    //   email: valuesSignUp.email,
    //   password: valuesSignUp.password,
    //   country: valuesSignUp.country,
    //   age: valuesSignUp.age,
    //   gender: valuesSignUp.gender,
    //   avatarPath: valuesSignUp.avatarUrl,
    //   isAdmin: false,
    //   isActive: true,
    // };

    axios({
      method: "post",
      url: "https://rokker-music-app-test.herokuapp.com/api/auth/sign-up",
      data: {
        name: valuesSignUp.name,
        lastname: "default",
        email: valuesSignUp.email,
        password: valuesSignUp.password,
        country: valuesSignUp.country,
        age: valuesSignUp.age,
        gender: valuesSignUp.gender,
        avatarPath: valuesSignUp.avatarPath,
      },
    }).then((resp) => {
      console.log(resp);
    });
  };

  // function handleChange to SignUp
  const handleChangeLogin = (event) => {
    setValuesSignUp({
      ...valuesSignUp,
      [event.target.name]: event.target.value,
    });
  };

  const changePage = () => {
    setPage(false);
  };

  if (page) {
    return (
      <PageContainer dark>
        <TopBar>
          <Header />
        </TopBar>
        <MainContainer>
          <TopTextBox>
            <h2>Welcome!</h2>
            <h5>Ready to rock with us?</h5>
          </TopTextBox>
          <FormBox>
            <SignUpEntryDataForm
              valuesSignUp={valuesSignUp}
              handleChangeLogin={handleChangeLogin}
              changePage={changePage}
            />
          </FormBox>
          <button type="button" onClick={changePage}>
            Next
          </button>
        </MainContainer>
      </PageContainer>
    );
  }
  return (
    <div>
      <SignUpPickAvatar
        valuesSignUp={valuesSignUp}
        handleChangeLogin={handleChangeLogin}
      />
      <button type="submit" onClick={handleSubmit}>
        Enviar
      </button>
    </div>
  );
};

export default SignUpEntryData;
