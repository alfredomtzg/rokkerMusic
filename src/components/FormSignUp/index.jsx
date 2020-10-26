/* eslint-disable no-console */
import React, { useState } from "react";
import { NextButton } from "../Buttons";
import { FormContainer, TextLabel, TextInput } from "../Forms/dark-styles";

export default function SignUpEntryData() {
  // SignUp Values
  const [valuesSignUp, setValuesSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // function handleChange to SignUp
  const handleChangeLogin = (event) => {
    setValuesSignUp({
      ...valuesSignUp,
      [event.target.name]: event.target.value,
    });
  };

  // Function HandleSubmitLogin
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    console.log(valuesSignUp);
  };

  return (
    <FormContainer onSubmit={handleSubmitLogin}>
      <TextLabel htmlFor="name">
        <h4>Name</h4>
      </TextLabel>
      <TextInput
        id="name"
        name="name"
        value={valuesSignUp.name}
        onChange={handleChangeLogin}
      />
      <h6>Please, give us your name</h6>

      <TextLabel htmlFor="email">
        <h4>E-mail</h4>
      </TextLabel>
      <TextInput
        id="email"
        name="email"
        autoComplete="current-email"
        value={valuesSignUp.email}
        onChange={handleChangeLogin}
      />
      <h6>This email has already been registered</h6>

      <TextLabel htmlFor="password">
        <h4>Password</h4>
      </TextLabel>
      <TextInput
        id="password"
        type="password"
        name="password"
        value={valuesSignUp.password}
        onChange={handleChangeLogin}
      />
      <h6>Must have 5 or more characters, no symbols. [A-Z/0-9]</h6>

      <TextLabel htmlFor="confirm-password">
        <h4>Confirm password</h4>
      </TextLabel>
      <TextInput
        id="confirm-password"
        type="password"
        name="confirmPassword"
        value={valuesSignUp.confirmPassword}
        onChange={handleChangeLogin}
      />
      <h6>Password does not match</h6>

      <div className="NextBtn">
        <NextButton type="submit" />
      </div>
    </FormContainer>
  );
}
