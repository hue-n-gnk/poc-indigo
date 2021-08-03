import React, { useReducer } from "react";
import "./App.css";
import AppContext from "./context/appContext";
import { defaultPatients, PatientsReducer } from "./reducers/patients";
import { defaultProfile, ProfileReducer } from "./reducers/profile";
import Patients from "./components/Patients/Patients";
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
        <div>
         
          <Patients />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
