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
    switch (props.location.pathname) {
      case "/":
        setDisplay("off");
        break;
      case "/activate":
        setDisplay("off");
        break;
      case "/home":
        setDisplay("on");
        break;
      case "/playlist":
        setDisplay("on");
        break;
      case "/playlist/edit":
        setDisplay("on");
        break;
      case "/playlist/create":
        setDisplay("on");
        break;
      case "/search":
        setDisplay("on");
        break;
      case "/search/results":
        setDisplay("on");
        break;
      case "/playlist-content":
        setDisplay("on");
        break;
      case "/login":
        setDisplay("off");
        break;
      case "/forgot-password":
        setDisplay("off");
        break;
      case "/recover-password":
        setDisplay("off");
        break;
      case "/signup":
        setDisplay("off");
        break;
      case "/signup/avatar":
        setDisplay("off");
        break;
      case "/signup/demographic":
        setDisplay("off");
        break;
      case "/signup/check":
        setDisplay("off");
        break;
      case "/artist":
        setDisplay("on");
        break;
      case "/player":
        setDisplay("on");
        break;
      case "/settings":
        setDisplay("on");
        break;
      case "/settings/stats":
        setDisplay("on");
        break;
      case "/signout":
        setDisplay("off");
        break;
      case "/settings/change-password":
        setDisplay("on");
        break;
      case "/queue":
        setDisplay("on");
        break;
      default:
        setDisplay("off");
        break;
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
