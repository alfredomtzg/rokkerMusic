/* eslint-disable no-console */
import React, { useState } from "react";
import { NextButton } from "../Buttons";
import {
  FormContainer,
  TextLabel,
  TextInput,
  SelectInput,
} from "../Forms/dark-styles";

export default function SignUpDemographicForm() {
  // SignUp Values
  const [valuesSignUp, setValuesSignUp] = useState({
    country: "",
    age: "",
    gender: "",
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
      <TextLabel htmlFor="country">
        <h4>Where are you from?</h4>
      </TextLabel>
      <SelectInput
        id="country"
        name="country"
        value={valuesSignUp.country}
        onChange={handleChangeLogin}
      >
        <option value="Colombia">Colombia</option>
        <option value="Mexico">Mexico</option>
      </SelectInput>
      <h6>Please pick one choice</h6>

      <TextLabel htmlFor="gender">
        <h4>Which one defines you best?</h4>
      </TextLabel>
      <SelectInput
        id="gender"
        name="gender"
        value={valuesSignUp.gender}
        onChange={handleChangeLogin}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </SelectInput>

      <h6>We are all inclusive, please pick one</h6>

      <TextLabel htmlFor="age">
        <h4>How young are you?</h4>
      </TextLabel>
      <TextInput
        id="age"
        name="age"
        type="date"
        value={valuesSignUp.age}
        onChange={handleChangeLogin}
      />
      <h6>Does not matter how young, please tell me</h6>

      <div className="NextBtn">
        <NextButton type="submit" />
      </div>
    </FormContainer>
  );
}
