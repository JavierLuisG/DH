import { createContext, useEffect, useReducer, useState } from "react";

export const initialState = { theme: "", data: [], favs: [] };
const reducer = (state, action) => {
  switch (action.type) {
    case "dark":
      return { ...state, theme: "dark" };
    case "light":
      return { ...state, theme: "" };
    case "GET_DATA_DENTISTS":
      return { ...state, data: action.payload };
    case "SET_FAVS":
      return { ...state, favs: [...state.favs, action.payload] };
    default:
      throw new Error("Error in style dark or light");
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1000);
  }, []);

  const getData = () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((info) => {
        dispatch({ type: "GET_DATA_DENTISTS", payload: info });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ContextGlobal.Provider value={{ loading, state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
