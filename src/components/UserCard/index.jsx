import React, { useState } from "react";
import { UserCardContainer, ImgContainer } from "./style";
import { TextLabel, TextInput, FormContainer } from "../Forms/light-styles";
import Avatar from "../../assets/images/avatars/Alexander.svg";

export default function UserCard() {
  // Values Profile
  // eslint-disable-next-line no-unused-vars
  const [valuesProfile, setValuesProfile] = useState({
    name: "Mike Riise",
    email: "mike@rokker.com",
  });

  return (
    <UserCardContainer>
      <ImgContainer>
        <img src={Avatar} alt="avatar" />
      </ImgContainer>
      <FormContainer>
        <TextLabel htmlFor="name">
          <h4>Name</h4>
        </TextLabel>
        <TextInput id="name" disabled name="name" value={valuesProfile.name} />
        <TextLabel htmlFor="email">
          <h4>E-mail</h4>
        </TextLabel>
        <TextInput
          id="email"
          disabled
          name="email"
          autoComplete="current-email"
          value={valuesProfile.email}
        />
      </FormContainer>
    </UserCardContainer>
  );
}
