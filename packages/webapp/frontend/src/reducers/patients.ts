import { PATIENTS_ACTIONS as PAA } from "../helper/constant";
export const defaultPatients = {
  patients: [
    {
      name: "vmd",
      id: "1",
      kana_name: "vmd-genki",
      gender: "male",
      birthday: "2020-01-02",
    },
    {
      name: "tvt1",
      id: "2",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
    },
    {
      name: "tvt2",
      id: "3",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
    },
    {
      name: "tvt3",
      id: "4",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
    },
    {
      name: "tvt4",
      id: "5",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
    }, {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
    }, {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
    },
    {
      name: "number4",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
    }, {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
    },
    {
      name: "last",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
    },
  ],
  showingPatients: [],
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
    case PAA.SET_SHOWING_PATIENTS: {
      return {
        ...state,
        showingPatients: action.data.patients,
      };
    }
    default:
      return state;
  }
};
