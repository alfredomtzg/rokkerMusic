import { render } from "@testing-library/react";
import React from "react";
import { StyledHeader } from "./styles";
import Logo from "../../assets/Logo/Rkr-black-nav.svg";

export const Header = () => {
  return (
    <StyledHeader>
      <img src={Logo} alt="Rokker Logo" />
    </StyledHeader>
  );
};
