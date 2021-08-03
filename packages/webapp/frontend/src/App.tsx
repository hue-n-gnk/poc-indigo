import React, { useReducer } from "react";
// import {I18nextProvider} from "react-i18next";
// import i18next from "i18next";
import "./App.css";
import AppContext from "./context/appContext";
import { defaultPatients, PatientsReducer } from "./reducers/patients";
import { defaultProfile, ProfileReducer } from "./reducers/profile";
import Patients from "./components/Patients/Patients";
import Language from "./components/Language"

function App() {
  const [patients, dispatchPatients] = useReducer(
    PatientsReducer,
    defaultPatients
  );
  const [profile, dispatchProfile] = useReducer(ProfileReducer, defaultProfile);

  return (
    <div className="App">

      <AppContext.Provider
        value={{ patients, dispatchPatients, profile, dispatchProfile }}
      >
        <Language/>
        <div>
         
          <Patients />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
