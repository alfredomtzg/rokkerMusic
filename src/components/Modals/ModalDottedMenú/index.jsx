import React from "react";
import {StyledOpenModal,StyledModal,StyledContenido,StyleClose} from './slyle'

export const Modal1 = () => {
    return (
    <StyledOpenModal href="#miModal">Abrir Modal</StyledOpenModal>
    <StyledModal id="miModal">
        <StyledContenido>
            <StyleClose href="#"><h2>Close</h2></StyleClose>;
        </StyledContenido>

    </StyledModal>
  

    );
  };