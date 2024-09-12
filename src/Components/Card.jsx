import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Context/global.context";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Card = ({ dentist }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const MySwal = withReactContent(Swal);

  const click = () => {
    addFav();
    MySwal.fire({
      title: "Add Fav!",
      text: "Dentist has been added.",
      icon: "success",
    });
  };

  const addFav = () => {
    dispatch({ type: "SET_FAVS", payload: dentist });
  };

  return (
    <div className="card">
      <img src="../../public/images/doctor.jpg" alt="Dentist" />
      <Link to={`/detail/${dentist.id}`}>
        <h3>{dentist.name}</h3>
      </Link>
      <h3>{dentist.username}</h3>
      <button className={`favButton ${state.theme}`} onClick={click}>
        ⭐
      </button>
    </div>
  );
};

export default Card;
