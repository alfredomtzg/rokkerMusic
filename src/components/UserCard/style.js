import styled from "styled-components";
import { Colors } from "../styles/globals";

export const UserCardContainer = styled.div`
  h4 {
    color: ${Colors.G700};
    margin-top: 1vh;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3vh;

  img {
    width: 10rem;
  }
`;
