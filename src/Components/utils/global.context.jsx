import { createContext, useEffect, useState } from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dentists, setDentists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 0);
  }, []);

  const getData = () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((info) => {
        setDentists(info);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ContextGlobal.Provider value={{ dentists, loading }}>
      {children}
    </ContextGlobal.Provider>
  );
};
