import styled from "styled-components";

export const PickAvatarTextBox = styled.div`
  display: flex;
`;

export const AvatarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5vw;

  img {
    width: 10rem;
  }
`;
