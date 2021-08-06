import React, { useState, useEffect, useContext } from "react";
// import BaseForm from "../BaseForm";
import Dialog from "@material-ui/core/Dialog";
import InputBase from "@material-ui/core/InputBase";
import { useTranslation } from "react-i18next";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import DatePicker from "@material-ui/lab/DatePicker";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Select from "@material-ui/core/Select";
import AppContext from "../../../context/appContext";
import { PATIENTS_ACTIONS as PAA } from "../../../helper/constant";
import "./styles.css";
import { DateType } from "@date-io/type";
import ShowResource from "../ShowResource";
const convertDateToString = (date: DateType) => {
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();

  return yyyy + "-" + mm + "-" + dd;
};
export const EditPatient = ({
  isOpen,
  patient,
  handleClose,
}: {
  isOpen: boolean;
  patient: any;
  handleClose: () => void;
}) => {
  const { t } = useTranslation();
  const [birthday, setBirthday] = useState(
    new Date(patient.birthDate ? patient.birthDate : "2020-01-01")
  );
  const [isOpenShowResource, setOpenResource] = useState(false);
  const [gender, setGender] = useState(patient.gender);
  const [active, setActive] = useState(patient.active ? "true" : "false");
  const { dispatchPatients } = useContext(AppContext);
  const handleCloseShowResource = () => {
    setOpenResource(false);
  };
  const handleChange = (e: any) => {
    setGender(e.target.value);
  };
  const handleChangeActive = (e: any) => {
    setActive(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    
    dispatchPatients({
      type: PAA.REPLACE_BY_INDEX,
      data: {
        patient: {
          name: e.target.name.value,
          gender: gender,
          active: active === "true" ? true : false,
          birthDate: convertDateToString(birthday),
        },
        index: patient.idx,
      },
    });
    handleClose();
  };
  useEffect(() => {
    setGender(patient.gender);
    setActive(patient.active);
    setBirthday(new Date(patient.birthDate));
  }, [patient]);
  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose}>
        <div className="main">
          <div className="formHeader">
            <CloseIcon
              style={{ position: "absolute", left: "10px", top: "7px" }}
              onClick={handleClose}
            />
            {t("editPatientDialog")}
          </div>

          <form className="main-form" onSubmit={onSubmit} id="editPatientForm">
            <div className="input-base title-base">
              <div className="field-input">
                <div>name</div>
                <InputBase
                  name="name"
                  defaultValue={patient.name && patient.name[0].text}
                />
              </div>
              <div className="field-input">
                <div>Active</div>
                <Select
                  native
                  value={active}
                  onChange={handleChangeActive}
                  className="gender-select"
                >
                  <option value={"true"}>True</option>
                  <option value={"false"}>False</option>
                </Select>
              </div>
              <div className="field-input">
                <div>gender</div>
                <Select
                  native
                  value={gender}
                  onChange={handleChange}
                  inputProps={{
                    name: "age",
                    id: "age-native-simple",
                  }}
                  className="gender-select"
                >
                  <option value={"male"}>Male</option>
                  <option value={"female"}>Female</option>
                </Select>
              </div>
              <div className="field-input">
                <div>birthday</div>
                <div className="birthday">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={birthday}
                      onChange={(newValue: any) => {
                        setBirthday(newValue);
                      }}
                      inputFormat="yyyy-MM-dd"
                      renderInput={(params: any) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
              </div>
            </div>
            <Button
              type="submit"
              className="button button-bottom"
              color="primary"
              variant="contained"
            >
              {t("edit")}
            </Button>
          </form>
          <Button
            className="button button-bottom1"
            color="primary"
            variant="contained"
            onClick={() => setOpenResource(true)}
          >
            {t("resource")}
          </Button>
        </div>
      </Dialog>
      <ShowResource
        isOpen={isOpenShowResource}
        handleClose={handleCloseShowResource}
        patient={patient}
      />
    </div>
  );
};
export default EditPatient;
