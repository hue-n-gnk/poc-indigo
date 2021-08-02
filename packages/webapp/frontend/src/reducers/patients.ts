import { PATIENTS_ACTIONS as PAA } from "../helper/constant";
export const defaultPatients = {
  patients: [],
};
export const PatientsReducer = (state: any, action: any) => {
  switch (action.type) {
    case PAA.PUSH_BACK: {
      return {
        ...state,
        patients: state.patients.push_back(action.data),
      };
    }
    case PAA.REPLACE_BY_INDEX: {
      const copyPatients = { ...state.patients };
      copyPatients[action.data.index] = action.data.patient;
      return {
        ...state,
        patients: copyPatients,
      };
    }
  }
};
