/* eslint-disable no-console */
import React, { useState } from "react";
import {
  FormContainer,
  TextLabel,
  TextInput,
  SelectInput,
} from "../Forms/dark-styles";

export default function SignUpEntryDataForm(props) {
  // SignUp Values
  const [valuesSignUp, setValuesSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    age: "",
    gender: "",
  });
  // function handleChange to SignUp
  // const handleChangeLogin = (event) => {
  //   setValuesSignUp({
  //     ...valuesSignUp,
  //     [event.target.name]: event.target.value,
  //   });
  // };

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
        value={props.valuesSignUp.name}
        onChange={props.handleChangeLogin}
      />
      <h6>Please, give us your name</h6>

      <TextLabel htmlFor="email">
        <h4>E-mail</h4>
      </TextLabel>
      <TextInput
        id="email"
        name="email"
        autoComplete="current-email"
        value={props.valuesSignUp.email}
        onChange={props.handleChangeLogin}
      />
      <h6>This email has already been registered</h6>

      <TextLabel htmlFor="password">
        <h4>Password</h4>
      </TextLabel>
      <TextInput
        id="password"
        type="password"
        name="password"
        value={props.valuesSignUp.password}
        onChange={props.handleChangeLogin}
      />
      <h6>Must have 5 or more characters, no symbols. [A-Z/0-9]</h6>

      <TextLabel htmlFor="confirm-password">
        <h4>Confirm password</h4>
      </TextLabel>
      <TextInput
        id="confirm-password"
        type="password"
        name="confirmPassword"
        value={props.valuesSignUp.confirmPassword}
        onChange={props.handleChangeLogin}
      />
      <h6>Password does not match</h6>

      <TextLabel htmlFor="country">
        <h4>Where are you from?</h4>
      </TextLabel>
      <SelectInput
        id="country"
        name="country"
        value={props.valuesSignUp.country}
        onChange={props.handleChangeLogin}
      >
        <option defaultValue value="choose">
          Choose Your Country
        </option>
        <option value="Colombia">Colombia</option>
        <option value="Mexico">Mexico</option>
      </SelectInput>

      <TextLabel htmlFor="gender">
        <h4>Which one defines you best?</h4>
      </TextLabel>
      <SelectInput
        id="gender"
        name="gender"
        value={props.valuesSignUp.gender}
        onChange={props.handleChangeLogin}
      >
        <option defaultValue value="choose">
          Choose Your Gender
        </option>
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
        value={props.valuesSignUp.age}
        onChange={props.handleChangeLogin}
      />
      <h6>Does not matter how young, please tell me</h6>

      {/* <div className="NextBtn">
        <NextButton type="button" onClick={props.changePage} />
      </div> */}
    </FormContainer>
  );
}
