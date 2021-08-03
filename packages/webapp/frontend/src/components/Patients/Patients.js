import React, { useContext } from "react";
import "./styles.css";
import AppContext from "../../context/appContext";
import Pagination from "../Pagination/Pagination";
export const Patients = () => {
  const {
    patients: { showingPatients },
  } = useContext(AppContext);
  return (
    <div>
      <div className="mainPatient">
        <input type="text" id="searchBar" name="searchBar" />
        <button>Search</button>
        <br />
      </div>
      <p className="centerPage" style={{ color: "red" }}>
        List of patients
      </p>
      <div className="centerPage">
        <table className="patientsTable">
          <thead>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>kana name</td>
              <td>gender</td>
              <td>birthday</td>
            </tr>
          </thead>
          <tbody>
            {showingPatients &&
              showingPatients.length > 0 &&
              showingPatients.map((p, idx) => {
                return (
                  <tr key={idx}>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.kana_name}</td>
                    <td>{p.gender}</td>
                    <td>{p.birthday}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};
export default Patients;
