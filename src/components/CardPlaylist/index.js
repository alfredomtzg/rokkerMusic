import React from "react";
import "../../assets/fonts/coolicons.css";
import { StyledCardPlaylist } from "./styles";
import Logo from "../../assets/images/logo-rokker.png";
export const CardPlaylist = () => {
  return (
    <StyledCardPlaylist>
      <img src={Logo} alt="" />
      <p>Your playlist name</p>
      <i className="ci-play_circle_filled"></i>
    </StyledCardPlaylist>
  );
};
