import { PROFILE_ACTIONS as PRA } from "../helper/constant";
export const defaultProfile = {
  name: "vmd",
  id: "1",
  kana_name: "vmd-genki",
  gender: "male",
  birthday: "2020-01-02",
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
