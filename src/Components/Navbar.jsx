import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { routes } from "../utils/routes";
import { ContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const validateTheme = () => {
    if (state.theme == "dark") {
      dispatch({ type: "light" });
    } else {
      dispatch({ type: "dark" });
    }
  };

  return (
    <nav className={state.theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <img src="../../public/images/DH.png" alt="" width={300} />
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.contact}>
        <h4>Contact</h4>
      </Link>
      <Link to={routes.favs}>
        <h4>Favs</h4>
      </Link>
      <button onClick={() => validateTheme()}>Change theme</button>
    </nav>
  );
};

export default Navbar;
