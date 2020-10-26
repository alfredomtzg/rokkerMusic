/* eslint-disable no-console */
import React, { useState } from "react";
import { SendButton } from "../Buttons";
import { FormContainer, TextLabel, TextInput } from "../Forms/dark-styles";

export default function ForgotPassForm() {
  // Send Values
  const [valuesSend, setValuesSend] = useState({
    email: "",
  });
  // function handleChange to Send
  const handleChangeSend = (event) => {
    setValuesSend({
      ...valuesSend,
      [event.target.name]: event.target.value,
    });
  };

  // Function HandleSubmitSend
  const handleSubmitSend = (event) => {
    event.preventDefault();
    console.log(valuesSend);
  };

  return (
    <FormContainer onSubmit={handleSubmitSend}>
      <TextLabel htmlFor="email">
        <h4>E-mail</h4>
      </TextLabel>
      <TextInput
        id="email"
        name="email"
        autoComplete="current-email"
        value={valuesSend.email}
        onChange={handleChangeSend}
      />

      <div className="SendBtn">
        <SendButton type="submit" />
      </div>
    </FormContainer>
  );
}
