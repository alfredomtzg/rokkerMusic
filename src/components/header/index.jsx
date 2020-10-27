import React from "react";
import StyledHeader from "./styles";
import Logo from "../../assets/Logo/Rkr-red-nav.svg";

const Header = () => {
  return (
    <StyledHeader>
      <img src={Logo} alt="Rokker Logo" />
    </StyledHeader>
  );
};

export default Header;
