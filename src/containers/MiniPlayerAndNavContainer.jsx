/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import MinimizedPlayer from "../components/MinimizedPlayer";
import Footer from "../components/Footer";
import { StyledMiniPlayerAndNavContainer } from "./LayoutContainers";

const MiniPlayerAndNavContainer = (props) => {
  const [display, setDisplay] = useState("off");

  useEffect(() => {
    if (props.location.pathname === "/home") {
      setDisplay("on");
    }
  }, [props.location.pathname]);

  return (
    <StyledMiniPlayerAndNavContainer display={display}>
      <MinimizedPlayer />
      <Footer />
    </StyledMiniPlayerAndNavContainer>
  );
};

export default withRouter(MiniPlayerAndNavContainer);
