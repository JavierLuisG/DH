import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Context/global.context";

const Home = () => {
  const { loading, state } = useContext(ContextGlobal);

  return (
    <main className={`home_container ${state.theme}`}>
      <h1>Home</h1>
      {loading ? (
        "Cargando..."
      ) : (
        <div className="card-grid">
          {state.data.map((element) => {
            return <Card key={element.id} dentist={element} />;
          })}
        </div>
      )}
    </main>
  );
};

export default Home;
