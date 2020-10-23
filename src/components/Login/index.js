import React, { useState } from 'react'
import { FormContainer, TextLabel, TextInput } from '../styles/styles'

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

      <TextLabel>Name</TextLabel>
      <TextInput
        name="name"
        value={valuesLogin.name}
        onChange={handleChangeLogin} />

      <TextLabel>E-mail</TextLabel>
      <TextInput
        name="email"
        autoComplete="current-email"
        value={valuesLogin.email}
        onChange={handleChangeLogin} />

      <TextLabel >Password</TextLabel>
      <TextInput
        type="password"
        name="password"
        value={valuesLogin.password}
        onChange={handleChangeLogin}
      />

      <TextLabel >Confirm your password</TextLabel>
      <TextInput
        type="password"
        name="confirmPassword"
        value={valuesLogin.confirmPassword}
        onChange={handleChangeLogin}
      />

      <button type="submit" >Next</button>
    </FormContainer>
  )
}
