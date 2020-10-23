import React, { useState } from 'react'
import { FormContainer, TextLabel, TextInput } from './styles'

export default function SignUp() {
  // SignUp Values
  const [valuesSignUp, setValuesSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  // function handleChange to SignUp
  const handleChangeLogin = (event) => {
    setValuesSignUp({ ...valuesSignUp, [event.target.name]: event.target.value })
  }

  // Function HandleSubmitLogin
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    console.log(valuesSignUp);
  }

  return (
    <FormContainer
      onSubmit={handleSubmitLogin}>

      <TextLabel>
        <h4>Name</h4>
      </TextLabel>
      <TextInput
        name="name"
        value={valuesSignUp.name}
        onChange={handleChangeLogin} />

      <TextLabel>
        <h4>E-mail</h4>
      </TextLabel>
      <TextInput
        name="email"
        autoComplete="current-email"
        value={valuesSignUp.email}
        onChange={handleChangeLogin} />

      <TextLabel >
        <h4>Password</h4>
      </TextLabel>
      <TextInput
        type="password"
        name="password"
        value={valuesSignUp.password}
        onChange={handleChangeLogin}
      />

      <TextLabel >
        <h4>Confirm your password</h4>
      </TextLabel>
      <TextInput
        type="password"
        name="confirmPassword"
        value={valuesSignUp.confirmPassword}
        onChange={handleChangeLogin}
      />
      {/* wait a style from Sergio */}
      <button type="submit" >
        <h5>Next</h5>
      </button>
    </FormContainer>
  )
}
