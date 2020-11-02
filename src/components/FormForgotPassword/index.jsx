/* eslint-disable no-console */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { SendButton } from "../Buttons";
import { FormContainer, TextLabel, TextInput } from "../Forms/dark-styles";
import { API } from "../../route/axios";

export default function ForgotPassForm() {
  const history = useHistory();
  // Send Values

  const [emailRecover, setEmailRecover] = useState({
    email: "",
  });

  // function handleChange to Send
  
  const handleChangeRecoverPassword = (event) => {
    setEmailRecover({
      ...emailRecover,
      [event.target.name]: event.target.value,
    });
  };

  // Function HandleSubmitSend

  const recoveriPassword = () => {
    API.post(`/auth/recovery`, emailRecover)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        history.push("/recover-password");
      })
      .catch((e) => {
        console.log(e.body);
      });
  };

  const handleSubmitSend = (event) => {
    event.preventDefault();
    recoveriPassword();
    console.log(emailRecover);
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
        value={emailRecover.email}
        onChange={handleChangeRecoverPassword}
      />

      <div className="SendBtn">
        <SendButton type="submit" onClick={handleSubmitSend} />
      </div>
    </FormContainer>
  );
}
