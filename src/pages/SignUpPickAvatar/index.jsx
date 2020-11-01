import React from "react";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { TopBar, TopTextBox, NextButtonBox } from "../Globals/GlobalStyle";
import { AvatarsGrid, StyledForm } from "./style";
import Header from "../../components/Header";
import { NextButton } from "../../components/Buttons";

const SingUpPickAvatar = (props) => {
  const avatar = {
    avatar1: {
      avatarUrl:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
    },
    avatar2: {
      avatarUrl:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456323.png",
    },
    avatar3: {
      avatarUrl:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456324.png",
    },
    avatar4: {
      avatarUrl:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456325.png",
    },
    avatar5: {
      avatarUrl:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456326.png",
    },
    avatar6: {
      avatarUrl:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456327.png",
    },
    avatar7: {
      avatarUrl:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456328.png",
    },
    avatar8: {
      avatarUrl:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456329.png",
    },
    avatar9: {
      avatarUrl:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456330.png",
    },
  };

  return (
    <PageContainer dark>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <TopTextBox>
          <h2>Welcome {props.valuesSignUp.name}</h2>
          <h5>Pick your avatar</h5>
        </TopTextBox>
        <AvatarsGrid>
          <form action="">
            <label htmlFor="avatar1">
              <img src={avatar.avatar1.avatarUrl} alt="avatar" />
            </label>
            <input
              id="avatar1"
              type="radio"
              name="avatarPath"
              value={avatar.avatar1.avatarUrl}
              onChange={props.handleChangeLogin}
            />

            <label htmlFor="avatar2">
              <img src={avatar.avatar2.avatarUrl} alt="avatar" />
            </label>
            <input
              type="radio"
              id="avatar2"
              name="avatarPath"
              value={avatar.avatar2.avatarUrl}
              onChange={props.handleChangeLogin}
            />

            <label htmlFor="avatar3">
              <img src={avatar.avatar3.avatarUrl} alt="avatar" />
            </label>
            <input
              type="radio"
              id="avatar3"
              name="avatarPath"
              value={avatar.avatar3.avatarUrl}
              onChange={props.handleChangeLogin}
            />

            <label htmlFor="avatar4">
              <img src={avatar.avatar4.avatarUrl} alt="avatar" />
            </label>
            <input
              type="radio"
              id="avatar4"
              name="avatarPath"
              value={avatar.avatar4.avatarUrl}
              onChange={props.handleChangeLogin}
            />

            <label htmlFor="avatar5">
              <img src={avatar.avatar5.avatarUrl} alt="avatar" />
            </label>
            <input
              type="radio"
              id="avatar5"
              name="avatarPath"
              value={avatar.avatar5.avatarUrl}
              onChange={props.handleChangeLogin}
            />

            <label htmlFor="avatar6">
              <img src={avatar.avatar6.avatarUrl} alt="avatar" />
            </label>
            <input
              type="radio"
              id="avatar6"
              name="avatarPath"
              value={avatar.avatar6.avatarUrl}
              onChange={props.handleChangeLogin}
            />

            <label htmlFor="avatar7">
              <img src={avatar.avatar7.avatarUrl} alt="avatar" />
            </label>
            <input
              type="radio"
              id="avatar7"
              name="avatarPath"
              value={avatar.avatar7.avatarUrl}
              onChange={props.handleChangeLogin}
            />

            <label htmlFor="avatar8">
              <img src={avatar.avatar8.avatarUrl} alt="avatar" />
            </label>
            <input
              type="radio"
              id="avatar8"
              name="avatarPath"
              value={avatar.avatar8.avatarUrl}
              onChange={props.handleChangeLogin}
            />

            <label htmlFor="avatar9">
              <img src={avatar.avatar9.avatarUrl} alt="avatar" />
            </label>
            <input
              type="radio"
              id="avatar9"
              name="avatarPath"
              value={avatar.avatar9.avatarUrl}
              onChange={props.handleChangeLogin}
            />
          </form>
        </AvatarsGrid>
      </MainContainer>
    </PageContainer>
  );
};

export default SingUpPickAvatar;
