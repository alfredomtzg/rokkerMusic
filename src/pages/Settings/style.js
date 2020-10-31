import styled from "styled-components";

export const UserAvatarBox = styled.div`
  padding: 5vh 0 1vh;
`;

export const SettingsButtonsBox = styled.div`
  display: grid;
  gap: 1vh;
  height: 16vh;
  margin: 2vh 0 20vh;

  button {
    display: flex;
    justify-self: center;
  }

  a {
    display: block;
    width: 100%;

    &focus {
      background-color: transparent;
    }
  }
`;
