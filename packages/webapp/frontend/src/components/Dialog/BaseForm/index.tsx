import React from "react";
import "./styles.css";
import CloseIcon from "@material-ui/icons/Close";
export const BaseForm = (props: any) => {
  return (
    <div className="main">
      <div className="formHeader">
        <CloseIcon style={{ position: "absolute", left: "10px", top: "7px" }} />
        {props.title}
      </div>     
    </div>
  );
};
export default BaseForm;
//InputProps={{ disableUnderline: true }}
