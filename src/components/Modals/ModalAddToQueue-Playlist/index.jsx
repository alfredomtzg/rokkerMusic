import React from "react";
import {
  StyledOpenModal,
  StyledModalDialog,
  StyledModalDialog2,
  StyledClose,
} from "./style";
import ModalCard from "../../Modal/index";

const ModalAddTQ = () => {
  return (
    <>
       <StyledOpenModal href="#openM">OOOOOOOOOO</StyledOpenModal> 
       <StyledModalDialog id="openM">
        <StyledModalDialog2>
          <StyledClose href="#">X</StyledClose>
          <ModalCard />
        </StyledModalDialog2>
      </StyledModalDialog>
    </>
  );
};
export default ModalAddTQ;
