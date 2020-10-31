import styled from "styled-components";
import { Colors } from "../styles/globals";

export const StyledModal = styled.div`
  position: relative;
  display: grid;
  gap: 3vh;
  height: 38vh;
  width: 100vw;
  padding: 2rem;
  background-color: ${Colors.G700};

  .buttonClose {
    position: absolute;
    right: 1rem;
    top: 1rem;
    color: ${Colors.G100};
    background-color: ${Colors.G700};
    border: none;
    font-size: 2.4rem;
  }
  .buttonItem{
    width:100%;
    display:block;
    border:none;
    background-color:none;
    padding:0;
    margin:0;
    &:focus{
      outline:none;
    }
  }
`;
export const StyledModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: flex-end;
`;
