import { PROFILE_ACTIONS as PRA } from "../helper/constant";
export const defaultProfile = {
  name: "",
  id: "",
  kana_name: "",
  gender: "",
  birthday: "",
};
export const ProfileReducer = (state: any, action: any) => {
  switch (action.type) {
    case PRA.UPDATE: {
      return action.data;
    }
    case PRA.RESET:
      return defaultProfile;
  }
};
