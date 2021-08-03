import React, { useContext } from "react";
import "./styles.css";
import AppContext from "../../context/appContext";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { useTranslation } from 'react-i18next';
const useStyles = makeStyles({
  table: {
    maxWidth: 750,
  },
});
export const Patients = () => {
  const classes = useStyles();
  const {t} = useTranslation();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchValue, setSearchValue] = React.useState('');
  const {
    patients: { patients, showingPatients },
  } = useContext(AppContext);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, patients.length - page * rowsPerPage);
  return (
    <div>
      <div className="mainPatient">
      <TextField label={t("search")} value={searchValue} onChange={handleChange} InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}/>        
        <br />
      </div>
      <p className="centerPage" style={{ color: "red" }}>
        {t("title")}
      </p>
      <div className="centerPage">
        <Paper style={{ minWidth: 750 }}>
          <TableContainer
            component={Paper}
            style={{ justifyContent: "center", display: "flex" }}
          >
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>name</TableCell>
                  <TableCell align="right">id</TableCell>
                  <TableCell align="right">kana_name</TableCell>
                  <TableCell align="right">gender</TableCell>
                  <TableCell align="right">birthday</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {patients &&
                  patients.length > 0 &&
                  patients
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((ele, idx) => (
                      <TableRow key={idx}>
                        <TableCell
                          component="th"
                          scope="row"
                          className="tableCell"
                          style={{ maxWidth: 10 }}
                        >
                          {ele.name}
                        </TableCell>
                        <TableCell
                          align="right"
                          className="tableCell"
                          style={{ maxWidth: 10 }}
                        >
                          {ele.id}
                        </TableCell>
                        <TableCell
                          align="right"
                          className="tableCell"
                          style={{ maxWidth: 10 }}
                        >
                          {ele.kana_name}
                        </TableCell>
                        <TableCell
                          align="right"
                          className="tableCell"
                          style={{ maxWidth: 10 }}
                        >
                          {ele.gender}
                        </TableCell>
                        <TableCell
                          align="right"
                          className="tableCell"
                          style={{ maxWidth: 10 }}
                        >
                          {ele.birthday}
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
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
            className={classes.table}
          />
        </Paper>
      </div>
      {/* <Pagination /> */}
    </div>
  );
};
export default Patients;
