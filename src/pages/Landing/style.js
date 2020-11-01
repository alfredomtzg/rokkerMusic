import styled from "styled-components";

export const MainLanding = styled.main`
  display: grid;
  margin: 0;
  grid-template-rows: 28vh 36vh 10vh;
`;

export const LandingLoginButtons = styled.section`
  display: grid;
  gap: 1vh;
  padding: 7vh 0;

  button {
    display: flex;
    justify-self: center;
  }

  a {
    display: flex;
    justify-content: center;
  }
`;

export const LandingSignUpButton = styled.section`
  display: flex;
  justify-self: center;
`;
