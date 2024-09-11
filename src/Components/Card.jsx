import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Context/global.context";

const Card = ({ dentist }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: "SET_FAVS", payload: dentist });
  };

  return (
    <div className="card">
      <img src="../../public/images/doctor.jpg" alt="Dentist" />
      <Link to={`/detail/${dentist.id}`}>
        <h3>{dentist.name}</h3>
      </Link>
      <h3>{dentist.username}</h3>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button className={`favButton ${state.theme}`} onClick={addFav}>
        ⭐
      </button>
    </div>
  );
};

export default Card;
