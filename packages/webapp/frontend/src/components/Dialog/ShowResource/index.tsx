import React from "react";
// import { Patient } from "../../../helper/model";
import Dialog from "@material-ui/core/Dialog";
import { useEffect, useState } from "react";
export const ShowResource = ({
  isOpen,
  patient,
  handleClose,
}: {
  isOpen: boolean;
  patient: any;
  handleClose: () => void;
}) => {
  const [resource, setResource] = useState("");
  useEffect(() => {
    // delete patient.idx;
    const tempRes = JSON.stringify(patient);
    const jsonRes = JSON.parse(tempRes);
    delete jsonRes.idx;
    const resString = JSON.stringify(jsonRes, undefined, 4);
    setResource(resString);
  }, [patient, isOpen]);
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <textarea id="myTextArea" cols={150} rows={55}>
        {resource}
      </textarea>
    </Dialog>
  );
};
export default ShowResource;
