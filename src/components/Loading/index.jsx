import React from "react";
import { ContainerSpinner, Spinner } from "./style";

const Loading = () => {
  return (
    <ContainerSpinner>
      <Spinner>
        <h2>Loading</h2>
        </Spinner>
    </ContainerSpinner>
  );
};
export default Loading;
