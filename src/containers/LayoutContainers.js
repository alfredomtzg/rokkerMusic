import styled from "styled-components";
import { Colors } from "../components/styles/globals";

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => (props.dark ? Colors.G700 : Colors.G100)};
`;
export const MainContainer = styled.div`
  padding: 0 5vw;
`;
