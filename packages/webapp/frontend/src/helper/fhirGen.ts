import generator from "fhir-resource-generator";
export const generatePatientResource = (
  fullName: string,
  email: string,
  birthday: string,
  gender: string
) => {
  const patientResource = generator.dstu2.patient(
    {
      gender: 1,
      name: 1,
      telecom: 1,
      active: 1,
      address: 1,
      deceased: 1,
      birthday: 1,
    },
    {
      "name.0.text": fullName,
      "name.0.use": "usual",
      gender: gender,
      "telecom.0.system": "email",
      "telecom.0.value": email,
      "telecom.0.use": "work",
      birthDate: birthday,
    }
  );
  return patientResource
  console.log(patientResource);
};
