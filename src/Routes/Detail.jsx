import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Context/global.context";
import { dentistsServices } from "../services/dentist";

const Detail = () => {
  const [dentist, setDentist] = useState({});
  const { state } = useContext(ContextGlobal);
  const params = useParams();

  useEffect(() => {
    dentistsServices.getOneDentist(params.id, setDentist);
  }, []);

  return (
    <div className={`${state.theme} detail_container`}>
      <h1>Detail Dentist {params.id}</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
