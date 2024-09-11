import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Context/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={`home_container ${state.theme}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((element) => {
          return <Card key={element.id} dentist={element} />;
        })}
      </div>
    </div>
  );
};

export default Favs;
