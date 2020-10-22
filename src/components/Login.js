import React from 'react'
import { FormContainer, TextLabel, TextInput, ButtonLogin } from './styles/styles'

export default function Login() {
  return (
    <FormContainer>

      <TextLabel >E-mail</TextLabel>
      <TextInput ></TextInput>
      <TextLabel >Password</TextLabel>
      <TextInput type="password" ></TextInput>
      <ButtonLogin type='onSubmit' onClick={() => alert("Hola")}>Login</ButtonLogin>
    </FormContainer>
  )
}
