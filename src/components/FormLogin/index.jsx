/* eslint-disable no-console */
import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { LoginButton } from "../Buttons";
import { FormContainer, TextLabel, TextInput } from "../Forms/dark-styles";
import { API, signIn, ApiKey } from "../../route/axios";
import { Context } from "../../utils/Context";

export default function LoginForm() {
  // history to redirect
  const history = useHistory();
  // bring context data
  const { setUser } = useContext(Context);
  // error
  const [error, setError] = useState(false);
  // Login Values
  const [valuesLogin, setValuesLogin] = useState({
    username: "",
    password: "",
  });
  // function handleChange to Login
  const handleChangeLogin = (event) => {
    setValuesLogin({
      ...valuesLogin,
      [event.target.name]: event.target.value,
    });
  };

  // Login user
  const token = Buffer.from(
    `${valuesLogin.username}:${valuesLogin.password}`,
    "utf8"
  ).toString("base64");

  // Login whit axios
  const login = async () => {
    const response = await API.post(signIn, ApiKey, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    });
    console.log(response);
    setUser(response.data.body);
    if (response.data.error === false) {
      // redirect to home
      history.push("/home");
    } else {
      // return error
      setError(true);
    }
  };

  // Function HandleSubmitLogin
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    // call Login function
    login();
    console.log(valuesLogin);
  };

  return (
    <FormContainer onSubmit={handleSubmitLogin}>
      <TextLabel htmlFor="email">
        <h4>E-mail</h4>
      </TextLabel>
      <TextInput
        id="username"
        name="username"
        autoComplete="current-email"
        value={valuesLogin.username}
        onChange={handleChangeLogin}
      />

      <TextLabel htmlFor="password">
        <h4>Password</h4>
      </TextLabel>
      <TextInput
        id="password"
        type="password"
        name="password"
        value={valuesLogin.password}
        onChange={handleChangeLogin}
      />
      <h6>Email or password incorrect. Please check and retry.</h6>
      <Link to="/forgot-password">
        <h5>Forgot your password?</h5>
      </Link>
      <div className="LoginBtn">
        <LoginButton type="submit" />
      </div>
    </FormContainer>
  );
}
