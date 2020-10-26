/* eslint-disable no-console */
import React, { useState } from "react";
import { SaveButton } from "../Buttons";
import { FormContainer, TextLabel, TextInput } from "../Forms/light-styles";

export default function NewPassForm() {
  // NewPass Values
  const [valuesNewPass, setValuesNewPass] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  // function handleChange to NewPass
  const handleChangeNewPass = (event) => {
    setValuesNewPass({
      ...valuesNewPass,
      [event.target.name]: event.target.value,
    });
  };

  // Function HandleSubmitNewPass
  const handleSubmitNewPass = (event) => {
    event.preventDefault();
    console.log(valuesNewPass);
  };

  return (
    <FormContainer onSubmit={handleSubmitNewPass}>
      <TextLabel htmlFor="currentPassword">
        <h4>Current Password</h4>
      </TextLabel>
      <TextInput
        id="currentPassword"
        type="password"
        name="currentPassword"
        value={valuesNewPass.currentPass}
        onChange={handleChangeNewPass}
      />
      <h6>Password incorrect. Please check and retry.</h6>

      <TextLabel htmlFor="newPassword">
        <h4>New Password</h4>
      </TextLabel>
      <TextInput
        id="newPassword"
        type="password"
        name="newPassword"
        value={valuesNewPass.newPass}
        onChange={handleChangeNewPass}
      />
      <h6>Must have 5 or more characters, no symbols. [A-Z/0-9]</h6>

      <TextLabel htmlFor="confirmPassword">
        <h4>Confirm New Password</h4>
      </TextLabel>
      <TextInput
        id="confirmPassword"
        type="password"
        name="confirmPassword"
        value={valuesNewPass.confirmPass}
        onChange={handleChangeNewPass}
      />
      <h6>Password does not match</h6>

      <div className="SaveBtn">
        <SaveButton type="submit" />
      </div>
    </FormContainer>
  );
}
