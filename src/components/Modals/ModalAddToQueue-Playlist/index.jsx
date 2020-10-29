import React, { useState } from "react";
import { Modal, StyledContainerModal, Button } from "./style";

const ModalAddToQueue = () => {
    const [showModal, setShowModal] = useState(false);
    
    const openModal = () => {
        setShowModal((prev) => !prev);
    };
    
    return (
        <>
      <StyledContainerModal>
        <Button onClick={openModal}>?</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </StyledContainerModal>
    </>
  );
};
export default ModalAddToQueue;
