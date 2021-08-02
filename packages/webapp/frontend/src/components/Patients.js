import React, { useContext } from "react";
import AppContext from "../context/appContext";
import DetailPatient from "./DetailPatient";
export const Patients = () => {
  const { patients } = useContext(AppContext);

  return (
    <div>
      {patients &&
        patients.length > 0 &&
        patients.map((pa, idx) => {
          return <DetailPatient patient={pa} />;
        })}
    </div>
  );
};
export default Patients;
