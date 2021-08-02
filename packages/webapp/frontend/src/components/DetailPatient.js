import React from "react";

export const DetailPatient = ({ patient }) => {
  return (
    <div>
      <p>id: {patient.id}</p>
      <p>Name: {patient.name}</p>
      <p>kana_name: {patient.kana_name}</p>
      <p>gender: {patient.gender}</p>
      <p>birthday: {patient.birthday}</p>
    </div>
  );
};
export default DetailPatient;
