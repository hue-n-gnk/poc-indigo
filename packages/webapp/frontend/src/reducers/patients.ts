import { PATIENTS_ACTIONS as PAA } from "../helper/constant";
export const defaultPatients = {
  patients: [
    {
      name: "vmd",
      id: "1",
      kana_name: "vmd-genki",
      gender: "male",
      birthday: "2020-01-02",
      email:"vmd@genkisystem.com"
    },
    {
      name: "tvt1",
      id: "2",
      kana_name: "tvt-genki",
      gender: "female",
      birthday: "2020-01-03",
      email:"vmd@genkisystem.com"
    },
    {
      name: "tvt2",
      id: "3",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
      email:"vmd@genkisystem.com"
    },
    {
      name: "tvt3",
      id: "4",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
      email:"vmd@genkisystem.com"
    },
    {
      name: "tvt4",
      id: "5",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
      email:"vmd@genkisystem.com"
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genkdasdasdsai",
      gender: "male",
      birthday: "2020-01-03",
      email:"vmd@genkisystem.com"
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
      email:"vmd@genkisystem.com"
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
      email:"vmd@genkisystem.com"
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
      email:"vmd@genkisystem.com"
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
      email:"vmd@genkisystem.com"
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
      email:"vmd@genkisystem.com"
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
      email:"vmd@genkisystem.com"
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genkidasdfasfasf",
      gender: "male",
      birthday: "2020-01-03",
      email:"vmd@genkisystem.com"
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genkdasdi",
      gender: "male",
      birthday: "2020-01-03",
      email:"vmd@genkisystem.com"
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
      email:"vmd@genkisystem.com"
    },
    {
      name: "number4",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
      email:"vmd@genkisystem.com"
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
      email:"vmd@genkisystem.com"
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
      email:"vmd@genkisystem.com"
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
      email:"vmd@genkisystem.com"
    },
    {
      name: "tvt5xxxxasd",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
      email:"vmd@genkisystem.com"
    },
    {
      name: "tvt5",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
      email:"vmd@genkisystem.com"
    },
    {
      name: "lastdalksjdlaklsd",
      id: "6",
      kana_name: "tvt-genki",
      gender: "male",
      birthday: "2020-01-03",
      email:"vmd@genkisystem.com"
    },
  ],
  showingPatients: [],
  patientsResource: [],
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
      const copyPatients = [...state.patientsResource];
      const temp = copyPatients[action.data.index];
      temp.name[0].text = action.data.patient.name;
      temp.active = action.data.patient.active;
      temp.gender = action.data.patient.gender;
      temp.birthDate = action.data.patient.birthDate;
      copyPatients[action.data.index] = temp;
      return {
        ...state,
        patientsResource: copyPatients,
      };
    }
    case PAA.SET_SHOWING_PATIENTS: {
      return {
        ...state,
        showingPatients: action.data.patients,
      };
    }
    case PAA.INIT_RESOURCES: {
      return {
        ...state,
        patientsResource: action.data.patientsResource,
      };
    }
    default:
      return state;
  }
};
