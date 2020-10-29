import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Colors } from "../../styles/globals";

export const StyledContainer2 = styled.a`
  width: 33.5rem;
  height: 3.9rem;
  margin: 0;
  padding: 0;
  background: ${Colors.G700};
  color: ${Colors.G100};
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 3.1rem 28rem 2.4rem;
  &:active {
    background: ${Colors.S700};
  }
`;
export const StyledImg = styled.img`
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: start;
  align-self: center;
  width: 3.1rem;
  height: 3.9rem;
`;

export const StyledName = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  padding-left: 2rem;
  margin: 0;
  p {
    margin: 0;
    padding: 0;
  }
`;
export const StyledSecondIcon = styled.i`
  justify-self: center;
  align-self: center;
  font-size: 3rem;
`;
export const CloseModalButton = styled(MdClose)`
  grid-column: 3/4;
  grid-row: 1/2;
  color: ${Colors.G100};
  cursor: pointer;
`;
