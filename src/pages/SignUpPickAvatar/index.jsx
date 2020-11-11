import React, { useContext } from "react";
import { Context } from "../../utils/Context";
import Loading from "../../components/Loading";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { TopTextBox } from "../Globals/GlobalStyle";
import {
  StyledForm,
  StyledSendButton,
  StyledInput,
  StyledLabel,
  StyledContainer,
} from "./style";

const SingUpPickAvatar = (props) => {
  const { valuesSignUp, handleChangeCreateUser, handleSubmit } = props;
  const { isLoading } = useContext(Context);
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
  if (isLoading === true) {
    return <Loading />;
  }
  return (
    <PageContainer dark>
      <MainContainer>
        <TopTextBox>
          <h2>Welcome {valuesSignUp?.name}</h2>
          <h5>Pick your avatar</h5>
        </TopTextBox>
        <StyledForm action="">
          <StyledContainer>
            <StyledLabel htmlFor="avatar1">
              <img src={avatar.avatar1.avatarUrl} alt="avatar" />
            </StyledLabel>
            <StyledInput
              id="avatar1"
              type="radio"
              name="avatarPath"
              value={avatar.avatar1.avatarUrl}
              onChange={handleChangeCreateUser}
            />
          </StyledContainer>

          <StyledContainer>
            <StyledLabel htmlFor="avatar2">
              <img src={avatar.avatar2.avatarUrl} alt="avatar" />
            </StyledLabel>
            <StyledInput
              type="radio"
              id="avatar2"
              name="avatarPath"
              value={avatar.avatar2.avatarUrl}
              onChange={handleChangeCreateUser}
            />
          </StyledContainer>

          <StyledContainer>
            <StyledLabel htmlFor="avatar3">
              <img src={avatar.avatar3.avatarUrl} alt="avatar" />
            </StyledLabel>
            <StyledInput
              type="radio"
              id="avatar3"
              name="avatarPath"
              value={avatar.avatar3.avatarUrl}
              onChange={handleChangeCreateUser}
            />
          </StyledContainer>

          <StyledContainer>
            <StyledLabel htmlFor="avatar4">
              <img src={avatar.avatar4.avatarUrl} alt="avatar" />
            </StyledLabel>
            <StyledInput
              type="radio"
              id="avatar4"
              name="avatarPath"
              value={avatar.avatar4.avatarUrl}
              onChange={handleChangeCreateUser}
            />
          </StyledContainer>

          <StyledContainer>
            <StyledLabel htmlFor="avatar5">
              <img src={avatar.avatar5.avatarUrl} alt="avatar" />
            </StyledLabel>
            <StyledInput
              type="radio"
              id="avatar5"
              name="avatarPath"
              value={avatar.avatar5.avatarUrl}
              onChange={handleChangeCreateUser}
            />
          </StyledContainer>

          <StyledContainer>
            <StyledLabel htmlFor="avatar6">
              <img src={avatar.avatar6.avatarUrl} alt="avatar" />
            </StyledLabel>
            <StyledInput
              type="radio"
              id="avatar6"
              name="avatarPath"
              value={avatar.avatar6.avatarUrl}
              onChange={handleChangeCreateUser}
            />
          </StyledContainer>

          <StyledContainer>
            <StyledLabel htmlFor="avatar7">
              <img src={avatar.avatar7.avatarUrl} alt="avatar" />
            </StyledLabel>
            <StyledInput
              type="radio"
              id="avatar7"
              name="avatarPath"
              value={avatar.avatar7.avatarUrl}
              onChange={handleChangeCreateUser}
            />
          </StyledContainer>

          <StyledContainer>
            <StyledLabel htmlFor="avatar8">
              <img src={avatar.avatar8.avatarUrl} alt="avatar" />
            </StyledLabel>
            <StyledInput
              type="radio"
              id="avatar8"
              name="avatarPath"
              value={avatar.avatar8.avatarUrl}
              onChange={handleChangeCreateUser}
            />
          </StyledContainer>

          <StyledContainer>
            <StyledLabel htmlFor="avatar9">
              <img src={avatar.avatar9.avatarUrl} alt="avatar" />
            </StyledLabel>
            <StyledInput
              type="radio"
              id="avatar9"
              name="avatarPath"
              value={avatar.avatar9.avatarUrl}
              onChange={handleChangeCreateUser}
            />
          </StyledContainer>
        </StyledForm>
      </MainContainer>
      <StyledSendButton type="submit" onClick={handleSubmit}>
        Send
      </StyledSendButton>
    </PageContainer>
  );
};

export default SingUpPickAvatar;
