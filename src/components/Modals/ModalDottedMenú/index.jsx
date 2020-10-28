import React, { useState } from "react";
import { Modal, StyledContainerModal, Button } from "./slyle";

// eslint-disable-next-line import/prefer-default-export
export const ModalDottedMenu = () => {
    const [showModal, setShowModal] = useState(false);
    
    const openModal = () => {
        setShowModal((prev) => !prev);
    };
    
    return (
        <>
      <StyledContainerModal>
        <Button onClick={openModal}>...</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </StyledContainerModal>
    </>
  );
};

