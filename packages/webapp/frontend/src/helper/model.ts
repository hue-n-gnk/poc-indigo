export interface Patient {
  id: string;
  name: HumanName[];
  active: boolean;
  telecom: ContactPoint[];
  gender: string;
  birthDate: string;
  address: Address[];
  deceased: Deceased;
}
export interface HumanName {
  use: string;
  text:string
}
export interface ContactPoint {
  use: string;
  value: string;
  system: string;
}
export interface Deceased {
  deceasedBoolean: boolean;
}
export interface Address {
  use: string;
  type: string;
  text: string;
  city: string;
}
