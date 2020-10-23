import React, { useState } from 'react'
import { FormContainer, TextLabel, TextInput } from './styles'

export default function Login() {
  // Login Values
  const [valuesLogin, setValuesLogin] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  // function handleChange to Login
  const handleChangeLogin = (event) => {
    setValuesLogin({ ...valuesLogin, [event.target.name]: event.target.value })
  }

  // Function HandleSubmitLogin
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    console.log(valuesLogin);
  }

  return (
    <FormContainer
      onSubmit={handleSubmitLogin}>

      <TextLabel>
        <h4>Name</h4>
      </TextLabel>
      <TextInput
        name="name"
        value={valuesLogin.name}
        onChange={handleChangeLogin} />

      <TextLabel>
        <h4>E-mail</h4>
      </TextLabel>
      <TextInput
        name="email"
        autoComplete="current-email"
        value={valuesLogin.email}
        onChange={handleChangeLogin} />

      <TextLabel >
        <h4>Password</h4>
      </TextLabel>
      <TextInput
        type="password"
        name="password"
        value={valuesLogin.password}
        onChange={handleChangeLogin}
      />

      <TextLabel >
        <h4>Confirm your password</h4>
      </TextLabel>
      <TextInput
        type="password"
        name="confirmPassword"
        value={valuesLogin.confirmPassword}
        onChange={handleChangeLogin}
      />
      {/* wait a style from Sergio */}
      <button type="submit" >
        <h5>Next</h5>
      </button>
    </FormContainer>
  )
}
