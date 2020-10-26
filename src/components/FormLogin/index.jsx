/* eslint-disable no-console */
import React, { useState } from "react";
import { LoginButton } from "../Buttons";
import { FormContainer, TextLabel, TextInput } from "../Forms/styles";

export default function LoginForm() {
  // Login Values
  const [valuesLogin, setValuesLogin] = useState({
    email: "",
    password: "",
  });
  // function handleChange to Login
  const handleChangeLogin = (event) => {
    setValuesLogin({
      ...valuesLogin,
      [event.target.name]: event.target.value,
    });
  };

  // Function HandleSubmitLogin
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    console.log(valuesLogin);
  };

  return (
    <FormContainer onSubmit={handleSubmitLogin}>
      <TextLabel htmlFor="email">
        <h4>E-mail</h4>
      </TextLabel>
      <TextInput
        id="email"
        name="email"
        autoComplete="current-email"
        value={valuesLogin.email}
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
      <a href="/">Forgot your password?</a>

      <div className="LoginBtn">
        <LoginButton type="submit" />
      </div>
    </FormContainer>
  );
}
