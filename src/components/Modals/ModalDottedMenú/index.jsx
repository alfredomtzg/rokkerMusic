import React from "react";
import {
  StyledOpenModal,
  StyledModalDialog,
  StyledModalDialog2,
  StyledClose,
} from "./style";
import ModalCard from "../../Modal/index";

const ModalDotted = () => {
  return (
    <>
      <StyledOpenModal href="#openM">ABRIR EL MODAL</StyledOpenModal>
      <StyledModalDialog id="openM">
        <StyledModalDialog2>
          <StyledClose href="#">SH</StyledClose>
          <ModalCard />
        </StyledModalDialog2>
      </StyledModalDialog>
    </>
  );
};
export default ModalDotted;
