import { createContext, useState } from 'react';

export const ProgFullDataContext = createContext(null);


export const ProgFullDataContextProvider = (props) => {
  const [ProgFullData, setProgFullData] = useState({
    title:"",
    content:"",
    link:"",
    imag:""
  })
  return (
    <ProgFullDataContext.Provider value={{ ProgFullData, setProgFullData }}>
      {props.children}
    </ProgFullDataContext.Provider>
  );
};


