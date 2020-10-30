import React from "react";
import { StyledOpenModal, StyledModalDialog,StyledModalDialog2,StyledClose } from "./style";
import Modalok from '../../Modal/index'

const Modal = () => {
  return (
    <>
      <StyledOpenModal href="#openM">ABRIR EL MODAL</StyledOpenModal>  
      <StyledModalDialog id="openM">
          <StyledModalDialog2>
              <StyledClose href="#">X</StyledClose>
              <Modalok/>
          </StyledModalDialog2>
      </StyledModalDialog>
    </>
  );
};
export default Modal;