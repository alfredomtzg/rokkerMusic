/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from "react";
import { StyledNextButton } from "../../pages/SignUpEntryData/style";
import { Context } from "../../utils/Context";
import {
  FormContainer,
  TextLabel,
  TextInput,
  SelectInput,
} from "../Forms/dark-styles";

export default function SignUpEntryDataForm(props) {
  const { valuesSignUp, handleChangeCreateUser, changePage } = props;

  const { error } = useContext(Context);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [inputName, setInputName] = useState(false);
  const [inputLastName, setInputLastName] = useState(false);
  const [inputAge, setInputAge] = useState(false);
  const [inputGender, setInputGender] = useState(false);

  const regexEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;
  const regexPassword = /^(?=.[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  const regexAge = /^[0-9]*$/;

  // Test validation for the regex
  const regexEmailValidation = regexEmail.test(valuesSignUp.email);
  const regexPasswordValidation = regexPassword.test(valuesSignUp.password);
  const regexAgeValidation = regexAge.test(valuesSignUp.age);

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    changePage();
  };

  const validationInputEmail = () => {
    if (regexEmailValidation) {
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
    }
  };

  const validateInputGender = () => {
    if (valuesSignUp.gender === "") {
      setInputGender(true);
    } else {
      setInputGender(false);
    }
  };

  const validateInputAge = () => {
    if (regexAgeValidation) {
      setInputAge(true);
    } else {
      setInputAge(false);
    }
  };

  const validateInputName = () => {
    if (valuesSignUp.name.length < 3) {
      setInputName(true);
    } else {
      setInputName(false);
    }
  };
  const validateInputLastName = () => {
    if (valuesSignUp.lastname.length < 3) {
      setInputLastName(true);
    } else {
      setInputLastName(false);
    }
  };

  const validatePassword = () => {
    if (regexPasswordValidation) {
      setPasswordValidation(true);
    } else {
      setPasswordValidation(false);
    }
  };

  const validateConfirmPassword = () => {
    if (valuesSignUp.password !== valuesSignUp.confirmPassword) {
      setWrongPassword(true);
    } else {
      setWrongPassword(false);
    }
  };

  useEffect(() => {
    validationInputEmail();
    validatePassword();
    validateConfirmPassword();
    validateInputName();
    validateInputLastName();
    validateInputAge();
    validateInputGender();
  });

  return (
    <FormContainer onSubmit={handleSubmitLogin}>
      <TextLabel htmlFor="name">
        <h4>Name</h4>
      </TextLabel>
      <TextInput
        required
        id="name"
        name="name"
        value={valuesSignUp.name}
        onChange={handleChangeCreateUser}
      />
      {inputName ? <h6>Please, give us your name</h6> : null}

      <TextLabel htmlFor="lastname">
        <h4>Last Name</h4>
      </TextLabel>
      <TextInput
        id="lastname"
        name="lastname"
        value={valuesSignUp.lastname}
        onChange={handleChangeCreateUser}
      />
      {inputLastName ? <h6>Please, give us your last name</h6> : null}

      <TextLabel htmlFor="email">
        <h4>E-mail</h4>
      </TextLabel>
      <TextInput
        required
        id="email"
        name="email"
        autoComplete="current-email"
        value={valuesSignUp.email}
        onChange={handleChangeCreateUser}
      />
      {emailValidation || error ? null : (
        <h6>This email is invalid or has already been registered</h6>
      )}

      <TextLabel htmlFor="password">
        <h4>Password</h4>
      </TextLabel>
      <TextInput
        required
        id="password"
        type="password"
        name="password"
        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        value={valuesSignUp.password}
        onChange={handleChangeCreateUser}
      />
      {passwordValidation ? null : (
        <h6>
          Must contain at least one number and one uppercase and lowercase
          letter, and at least 5 or more characters
        </h6>
      )}

      <TextLabel htmlFor="confirm-password">
        <h4>Confirm password</h4>
      </TextLabel>
      <TextInput
        required
        id="confirm-password"
        type="password"
        name="confirmPassword"
        value={valuesSignUp.confirmPassword}
        onChange={handleChangeCreateUser}
      />
      {wrongPassword ? <h6>Password does not match</h6> : null}

      <TextLabel htmlFor="country">
        <h4>Where are you from?</h4>
      </TextLabel>
      <SelectInput
        required
        id="country"
        name="country"
        value={valuesSignUp.country}
        onChange={handleChangeCreateUser}
      >
        <option defaultValue value="">
          Choose Your Country
        </option>
        <option value="Colombia">Colombia</option>
        <option value="Mexico">Mexico</option>
      </SelectInput>

      <TextLabel htmlFor="gender">
        <h4>Which one defines you best?</h4>
      </TextLabel>
      <SelectInput
        required
        id="gender"
        name="gender"
        value={valuesSignUp.gender}
        onChange={handleChangeCreateUser}
      >
        <option defaultValue value="">
          Choose Your Gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </SelectInput>
      {inputGender ? <h6>We are all inclusive, please pick one</h6> : null}

      <TextLabel htmlFor="age">
        <h4>How young are you?</h4>
      </TextLabel>
      <TextInput
        required
        id="age"
        name="age"
        value={valuesSignUp.age}
        onChange={handleChangeCreateUser}
      />
      {inputAge ? null : <h6>Only accept numbers</h6>}
      <StyledNextButton type="submit">Next</StyledNextButton>
    </FormContainer>
  );
}
