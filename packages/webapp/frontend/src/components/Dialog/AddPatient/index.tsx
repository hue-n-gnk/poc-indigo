import React, { useState } from "react";
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
import "./styles.css";
export const AddPatient = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  const { t } = useTranslation();
  const [value, setValue] = useState(Date.now());
  const [gender, setState] = useState("male");
  const handleChange = (e: any) => {
    setState(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose}>
        <div className="main">
          <div className="formHeader">
            <CloseIcon
              style={{ position: "absolute", left: "10px", top: "7px" }}
              onClick={handleClose}
            />
            {t("addPatientDialog")}
          </div>

          <form className="main-form" onSubmit={onSubmit} id="addPatientForm">
            <div className="input-base title-base">
              <div className="field-input">
                <div>name</div>
                <InputBase name="name" />
              </div>
              <div className="field-input">
                <div>kana_name</div>
                <InputBase name="kana_name" />
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
                      value={value}
                      onChange={(newValue: any) => {
                        setValue(newValue);
                      }}
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
              {t("register")}
            </Button>
          </form>
        </div>
      </Dialog>
    </div>
  );
};
export default AddPatient;
