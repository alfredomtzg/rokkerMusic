import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { PlaylistSearchCard } from "../../Cards/index";
import ButtonAddToQueue from '../AddToQueue/index';
import ButtonSeeArtistProfile from '../SeeArtistProfile/index'
import ButtonAddToPlaylist from '../AddToPlaylist/index'
import ButtonAddRemove from '../Add-Remove/index'
import {Colors} from '../../styles/globals'

export const StyledContainerModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Button = styled.button`
  min-width: 10rem;
  padding: 1.6rem 3.2rem;
  border-radius: 0.4rem;
  border: none;
  background: ${Colors.G700};
  color: ${Colors.G100};
  font-size: 2.4rem;
  cursor: pointer;
`;

export const Background = styled.div`
  width: 100rem;
  height: 100rem;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* Contenedor Modal por dentro */
export const ModalWrapper = styled.div`
  width: 37.5rem;
  height: 25.2rem;
  box-shadow: 0 0.5rem 1.6rem rgba(0, 0, 0, 1);
  background: ${Colors.G700}; /*color de fondo modal */
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* container para grid grid */
export const StyledModalContaines = styled.div`
  width: 33.5rem;
  height: 20.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3.9rem 1rem 3.9rem 3.9rem 3.9rem 3.9rem;
  gap: 0.1rem 0rem;
`;

export const StyledButonSongTitle = styled.a`
  background:${Colors.G700};
  color:${Colors.G200};
  outline: none;
  border: none;
  justify-self: stretch;
  grid-column: 1/2;
  grid-row: 1/2;
  &:active {
    background: ${Colors.S700};
  }
`;

export const StyledButonAddTQ = styled(StyledButonSongTitle)`
  grid-column: 1/2;
  grid-row: 3/4;
`;

export const StyledButonArtisProfile = styled(StyledButonSongTitle)` 
  grid-column: 1/2;
  grid-row: 4/5; 
`;

export const StyledButonPlaylist = styled(StyledButonSongTitle)` 
  grid-column: 1/2;
  grid-row: 5/6; 
`;

export const StyledButonAddRemove = styled(StyledButonSongTitle)`
  grid-column: 1/2;
  grid-row: 6/7;
`;

/* X de Close */
const CloseModalButton = styled(MdClose)`
  color: ${Colors.G100}; /*color de la X del modal */
  cursor: pointer;
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  width: 1.8rem;
  height: 1.8rem;
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
                <StyledButonSongTitle>
                  <PlaylistSearchCard />
                </StyledButonSongTitle>
                <StyledButonAddTQ>
                  <ButtonAddToQueue/>
                </StyledButonAddTQ>
                <StyledButonArtisProfile><ButtonSeeArtistProfile/></StyledButonArtisProfile>
                <StyledButonPlaylist><ButtonAddToPlaylist/></StyledButonPlaylist>
                <StyledButonAddRemove><ButtonAddRemove/></StyledButonAddRemove>
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
