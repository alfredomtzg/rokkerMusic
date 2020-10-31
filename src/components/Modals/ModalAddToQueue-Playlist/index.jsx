import React from "react";
import {
  StyledOpenModal,
  StyledModalDialog,
  StyledModalDialog2,
  StyledClose,
} from "./style";

const ModalAddTQ = () => {
  return (
    <>
       <StyledOpenModal href="#openM">OOOOOOOOOO</StyledOpenModal> 
       <StyledModalDialog id="openM">
        <StyledModalDialog2>
          <StyledClose href="#">X</StyledClose>
          <h1>modal de prueba</h1>         
        </StyledModalDialog2>
      </StyledModalDialog>
    </>
  );
};
export default ModalAddTQ;
