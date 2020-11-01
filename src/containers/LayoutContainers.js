import styled from "styled-components";
import { Colors } from "../components/styles/globals";

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => (props.dark ? Colors.G700 : Colors.G100)};
`;

export const MainContainer = styled.div`
  padding: 0 5vw 12vh;
`;

export const PlayerContainer = styled.div`
  display: ${(props) => (props.playerDisplay === "off" ? "none" : "relative")};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  background-color: ${Colors.G100};
`;

export const StyledMiniPlayerAndNavContainer = styled.footer`
  display: ${(props) => (props.display === "off" ? "none" : "relative")};
  position: fixed;
  bottom: 0;
  width: 100vw;
`;
