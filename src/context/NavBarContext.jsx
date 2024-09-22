import { createContext, useState } from 'react';

export const NavBarContext = createContext(null);


export const NavBarContextProvider = (props) => {
  const [NavValue, setNavValue] = useState(false)
  return (
    <NavBarContext.Provider value={{ NavValue, setNavValue }}>
      {props.children}
    </NavBarContext.Provider>
  );
};