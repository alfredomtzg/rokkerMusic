import React, { useState } from "react";
import { Modal, Container, Button } from "./slyle";

// eslint-disable-next-line import/prefer-default-export
export const ModalDottedMenu = () => {
    const [showModal, setShowModal] = useState(false);
    
    const openModal = () => {
        setShowModal((prev) => !prev);
    };
    
    return (
        <>
      <Container>
        <Button onClick={openModal}>...</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </Container>
    </>
  );
};

