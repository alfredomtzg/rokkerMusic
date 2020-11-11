import React, { useContext, useState } from "react";
import { Context } from "../../utils/Context";
import { API, signUp } from "../../route/axios";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { TopTextBox, FormBox } from "../Globals/GlobalStyle";
import SignUpEntryDataForm from "../../components/FormSignUp";
import SignUpPickAvatar from "../SignUpPickAvatar";
import {
  StyledNextButton,
  StyledSignUpSubtitle,
  StyledSignUpTitle,
} from "./style";

const SignUpEntryData = (props) => {
  const { setError, setIsLoading } = useContext(Context);
  const [page, setPage] = useState(true);
  // SignUp Values
  const [valuesSignUp, setValuesSignUp] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    age: "",
    gender: "",
    avatarPath: "",
  });

  // function handleChange to SignUp
  const handleChangeCreateUser = (event) => {
    setValuesSignUp({
      ...valuesSignUp,
      [event.target.name]: event.target.value,
    });
  };

  const createNewUser = async () => {
    setIsLoading(true);
    await API.post(signUp, valuesSignUp)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setIsLoading(false);
        props.history.push("/signup/check");
      })
      .catch((e) => {
        console.log(e.body);
        setIsLoading(false);
        setError(true);
        setPage(true);
        props.history.push("/signup");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewUser();
  };

  const changePage = () => {
    setPage(false);
  };

  if (page) {
    return (
      <PageContainer dark>
        <MainContainer>
          <TopTextBox>
            <StyledSignUpTitle>Welcome!</StyledSignUpTitle>
            <StyledSignUpSubtitle>Ready to rock with us?</StyledSignUpSubtitle>
          </TopTextBox>
          <FormBox>
            <SignUpEntryDataForm
              valuesSignUp={valuesSignUp}
              handleChangeCreateUser={handleChangeCreateUser}
              changePage={changePage}
            />
          </FormBox>
          {/* <StyledNextButton type="button" onClick={changePage}>
            Next
          </StyledNextButton> */}
        </MainContainer>
      </PageContainer>
    );
  }
  return (
    <PageContainer dark>
      <SignUpPickAvatar
        valuesSignUp={valuesSignUp}
        handleChangeCreateUser={handleChangeCreateUser}
        handleSubmit={handleSubmit}
      />
    </PageContainer>
  );
};

export default SignUpEntryData;
