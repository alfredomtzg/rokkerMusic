import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const StyledContainerModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: red;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
/*Contenedor Modal por dentro*/
const ModalWrapper = styled.div`
  width: 375px;
  height: 252px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 1);
  background: #091e42;/*color de fondo modal */
  display:flex;
  justify-content:center;
  align-items:center;
`;

/* const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`; */
/*Primer division en grid */
const StyledModalContaines = styled.div`
 width:335px;
height:204px;
background:green;
`;
/* X de Close */
const CloseModalButton = styled(MdClose)`
  color: #fff;/*color de la X del modal */
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 14px;
  height: 14px;
  padding: 0;
  z-index: 10;
`;

// eslint-disable-next-line react/prop-types
export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(70%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        
      }
    },
    [setShowModal, showModal]
    );
    
    useEffect(() => {
      document.addEventListener("keydown", keyPress);
      return () => document.removeEventListener("keydown", keyPress);
    }, [keyPress]);
    
    return (
      // eslint-disable-next-line react/jsx-filename-extension
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <StyledModalContaines>
                <h1>Rokker</h1>
              </StyledModalContaines>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
