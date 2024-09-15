import { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../reducers/reducer";
import { dentistsServices } from "../services/dentist";

const initialFavs = JSON.parse(localStorage.getItem("favs_dentist")) || [];

export const initialState = {
  theme: "",
  data: [],
  favs: initialFavs,
  stateCard: "home",
  loadingHome: true
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("favs_dentist", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    setTimeout(() => {
      dentistsServices.getAllDentists(dispatch);
    }, 2000);
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
