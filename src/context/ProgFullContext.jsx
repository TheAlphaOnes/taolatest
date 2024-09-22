import { createContext, useState } from 'react';

export const ProgFullContext = createContext(null);


export const ProgFullContextProvider = (props) => {
  const [ProgFullValue, setProgFullValue] = useState(false)
  return (
    <ProgFullContext.Provider value={{ ProgFullValue, setProgFullValue }}>
      {props.children}
    </ProgFullContext.Provider>
  );
};