import styled from "styled-components";
import { Colors } from "../styles/globals";

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2vh 7vw;
  font-size: 2.4rem;
  background-color: ${Colors.G700};
  color: ${Colors.G100};
`;

export default Navbar;
