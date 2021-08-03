/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
// import "./styles.css";
import AppContext from "../../context/appContext";
import { PATIENTS_ACTIONS as PAA } from "../../helper/constant";
export const Pagination = () => {
  const {
    patients: { patients },
    dispatchPatients,
  } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [listPages, setListPages] = useState([]);
  useEffect(() => {}, []);
  const handlePrevious = () => {
    const totalPages = Math.ceil(patients.length / 5);
    const offSet = Math.ceil(currentPage / 3);
    if (offSet === 1) return;
    const previousPage = offSet - 1;
    const endPage =
      previousPage + 2 <= totalPages ? previousPage + 2 : totalPages;
    const ar = new Array(endPage - previousPage + 1)
      .fill()
      .map((_, idx) => previousPage + idx);
    setListPages(ar);
  };
  const handleNext = () => {
    const totalPages = Math.ceil(patients.length / 5);
    const offSet = Math.ceil(currentPage / 3);
    const nextPage = offSet * 3 + 1;
    if (nextPage > totalPages) return;
    const startNext = nextPage;
    const endNext = startNext + 2 <= totalPages ? startNext + 3 : totalPages;

    const ar = new Array(endNext - startNext + 1)
      .fill()
      .map((_, idx) => startNext + idx);
    setListPages(ar);
  };
  const handleChangePage = (e) => {
    setCurrentPage(parseInt(e.target.id));
  };
  useEffect(() => {
    setCurrentPage(listPages[0]);
  }, [listPages]);
  useEffect(() => {
    const totalPages = Math.ceil(patients.length / 5);
    const arr = new Array(totalPages > 3 ? 3 : totalPages)
      .fill()
      .map((_, idx) => 1 + idx);
    setListPages(arr);
  }, [patients]);
  useEffect(() => {
    const start = (currentPage - 1) * 5;
    const ar = patients.slice(start, start + 5);
    dispatchPatients({
      type: PAA.SET_SHOWING_PATIENTS,
      data: { patients: ar },
    });
  }, [currentPage]);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <p onClick={handlePrevious} style={{ cursor: "pointer" }}>
        Previous
      </p>
      {listPages &&
        listPages.length > 0 &&
        listPages.map((ele) => {
          return (
            <span
              id={ele}
              key={Math.random()}
              onClick={handleChangePage}
              style={{
                color: currentPage === ele ? "red" : "none",
                margin: "14px 10px 0px 10px",
                cursor: "pointer",
                fontSize: 20,
              }}
            >
              {ele}
            </span>
          );
        })}
      <p style={{ cursor: "pointer" }} onClick={handleNext}>
        Next
      </p>
    </div>
  );
};
export default Pagination;
