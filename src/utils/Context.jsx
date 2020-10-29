// import react
import React, { useState } from "react";
// create functional component for context provider and export it
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [name, setName] = useState("Music App");

  // return Value
  return (
    <Context.Provider
      value={{
        name,
        setName,
      }}
    >
      {children}
    </Context.Provider>
  );
};
