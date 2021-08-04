import React, { useContext, useState } from "react";
import "./styles.css";
import AppContext from "../../context/appContext";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import AddPatient from "../Dialog/AddPatient";
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
  trData : {
    fontSize: 20
  }
});
export const Patients = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [isOpenAddPatient, setIsOpenAddPatient] = useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const {
    patients: { patients, showingPatients },
  } = useContext(AppContext);
  const handleCloseAddPatientDialog = () => {
    setIsOpenAddPatient(false);
  };
  const handleChangePage = (e: any, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, patients.length - page * rowsPerPage);
  return (
    <div className="mainPatient">
      <div className="eleActions">
        <form>
          <InputLabel>{t("search")}</InputLabel>
          <InputBase className="inputBase" onChange={handleChange} />
        </form>
        <Button
          color="primary"
          variant="contained"
          className="button"
          onClick={() => setIsOpenAddPatient(true)}
        >
          {t("addPatient")}
        </Button>
        <br />
      </div>

      <div>
        <Paper>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell width="15%" classes={{ root: classes.trData }}>
                    id
                  </TableCell>
                  <TableCell
                    width="25% "
                    classes={{ root: classes.trData }}
                    align="left"
                  >
                    name
                  </TableCell>
                  <TableCell
                    width="20%"
                    classes={{ root: classes.trData }}
                    align="left"
                  >
                    kana_name
                  </TableCell>
                  <TableCell
                    width="20%"
                    classes={{ root: classes.trData }}
                    align="left"
                  >
                    gender
                  </TableCell>
                  <TableCell
                    width="20%"
                    classes={{ root: classes.trData }}
                    align="left"
                  >
                    birthday
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {patients &&
                  patients.length > 0 &&
                  patients
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((ele: any, idx: number) => (
                      <TableRow key={idx} hover>
                        <TableCell
                          component="th"
                          scope="row"
                          classes={{ root: classes.trData }}
                        >
                          {ele.id}
                        </TableCell>
                        <TableCell
                          align="left"
                          classes={{ root: classes.trData }}
                        >
                          {ele.name}
                        </TableCell>
                        <TableCell
                          align="left"
                          classes={{ root: classes.trData }}
                        >
                          {ele.kana_name}
                        </TableCell>
                        <TableCell
                          align="left"
                          classes={{ root: classes.trData }}
                        >
                          {ele.gender}
                        </TableCell>
                        <TableCell
                          align="left"
                          classes={{ root: classes.trData }}
                        >
                          {ele.birthday}
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={7} classes={{ root: classes.trData }} />
                </TableRow>
              )}
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5]}
            component="div"
            count={patients.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
      {/* <Pagination /> */}
      <AddPatient
        isOpen={isOpenAddPatient}
        handleClose={handleCloseAddPatientDialog}
      />
    </div>
  );
};
export default Patients;
