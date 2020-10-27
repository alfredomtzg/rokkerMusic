import styled from "styled-components";
import { Colors } from "../styles/globals"

export const UserCardContainer = styled.div`
  width: 100%;
`

export const ImgContainer = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 13.8rem;
  height: 13.8rem;

  img {
    width: 10rem;
    height: 10rem;
    object-fit: contain;
    border-radius: 0.5rem;
  }
`