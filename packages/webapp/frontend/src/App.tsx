import React, { useReducer } from "react";
import "./App.css";
import AppContext from "./context/appContext";
import { defaultPatients, PatientsReducer } from "./reducers/patients";
import { defaultProfile, ProfileReducer } from "./reducers/profile";
import Patients from "./components/Patients";
import Language from "./components/Language"
import {  ThemeProvider,createTheme } from '@material-ui/core/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: "#0277bd"
    },
    secondary: {
      main: "#0277bd"
    },
  },
});
function App() {
  const [patients, dispatchPatients] = useReducer(
    PatientsReducer,
    defaultPatients
  );
  const [profile, dispatchProfile] = useReducer(ProfileReducer, defaultProfile);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <AppContext.Provider
        value={{ patients, dispatchPatients, profile, dispatchProfile }}
      >
        <Language/>
        <div>
         <Patients/>
        </div>
      </AppContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
