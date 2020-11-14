import React, { useState, useContext } from "react";
import { UserCardContainer, ImgContainer } from "./style";
import { TextLabel, TextInput, FormContainer } from "../Forms/light-styles";
import Avatar from "../../assets/images/avatars/Alexander.svg";
import { Context } from "../../utils/Context";

export default function UserCard() {
  const { user } = useContext(Context);

  // Values Profile
  // eslint-disable-next-line no-unused-vars
  const [valuesProfile, setValuesProfile] = useState({
    name: `${user.name}`,
    email: `${user.email}`,
  });

  return (
    <UserCardContainer>
      <ImgContainer>
        <img src={user.avatarPath} alt="avatar" />
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
