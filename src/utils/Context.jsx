// import react
import React, { useState } from "react";
// create functional component for context provider and export it
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [name, setName] = useState({
    playlistFrom: "Tu Biblioteca",
    playlistName: "Music App",
    artistName: "Jonas Brothers",
  });

  // return Value
  return (
    <Context.Provider
      value={{
        name,
      }}
    >
      {children}
    </Context.Provider>
  );
};
