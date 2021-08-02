import React, { useContext } from "react";
import AppContext from "../context/appContext";
export const MyProfile = () => {
  const { profile } = useContext(AppContext);

  return (
    <div>
      <div>
        {profile.id !== "" ? (
          <div>
            <p>id: {profile.id}</p>
            <p>Name: {profile.name}</p>
            <p>kana_name: {profile.kana_name}</p>
            <p>gender: {profile.gender}</p>
            <p>birthday: {profile.birthday}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default MyProfile;
