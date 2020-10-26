import React from "react";
import {StyledOpenModal,StyledModal,StyledContenido,StyleClose} from './slyle'

export const Modal = () => {
    return (
    <StyledOpenModal href="#miModal"/>
    <StyledModal id="miModal">
        <StyledContenido>
            <StyleClose href="#">
                <h3>close</h3>
            </StyleClose>
        </StyledContenido>
    </StyledModal>
  

    );
  };