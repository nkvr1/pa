import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  tableData,
  deleteData,
  setCurrentPage,
} from "../../ActionData/CompaniesAction";
import { Button } from "@mui/material";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data1 = useSelector((state) => state.CompaniesState.posts);

  const data2 = useSelector((state) => state.CompaniesState.newposts);

  const currentPage = useSelector((state) => state.CompaniesState.currentPage);
  const selectedValue = useSelector(
    (state) => state.CompaniesState.selectedValue
  );
  const searchTerm = useSelector((state) => state.CompaniesState.searchTerm);
  const row = useSelector((state) => state.CompaniesState.row);
  const [data, setData] = useState(data2);
  useEffect(() => {
    setData(data1);
  }, [data1]);

  useEffect(() => {
    dispatch(tableData(currentPage, selectedValue, searchTerm));
  }, [currentPage, selectedValue, searchTerm, dispatch]);
  console.log(data2);

  const addNewRow = () => {
    const newRowData = data2;
    console.log(newRowData);
    setData((prevTableData) => [...prevTableData, ...newRowData]);
    console.log(data);
  };
  const deleteRow = (id) => {
    dispatch(deleteData(id));
  };

  const editRow = (value) => {
    dispatch({ type: "edit_row", payload: value });
    navigate("/Companies/CompaniesEdit");
  };

  const handlePageNation = (e) => {
    const { value } = e.target;

    dispatch({ type: "SET_RECORDS_PER_PAGE", payload: value });
    dispatch({ type: "SET_CURRENT_PAGE", payload: 0 });
  };
  const handleInputChange = (e) => {
    const { value } = e.target;
    dispatch({ type: "UPDATE_SEARCH_TERM", payload: value });
  };
  const handlePageChange = (page) => {
    if (page >= 0 && page < 100) {
      dispatch(setCurrentPage(page));
    }
  };

  const handleNavigate = () => {
    navigate("/Companies/CompaniesAdd");
  };

  const lastpage = Math.ceil(100 / selectedValue);
  const firstpage = Math.ceil(currentPage / selectedValue);

  return (
    <div>
      <h1>Data Table</h1>
      <div className="Sub-harder">
        <div>
          <Button
            sx={{
              position: "relative",
              top: 13,
              left: 20,
              backgroundColor: "rgb(228, 228, 238)",
              color: "blue",
            }}
          >
            open
          </Button>
          <Button
            sx={{
              position: "relative",
              left: 25,
              top: 13,
              color: "white",
              backgroundColor: "rgb(107, 105, 122)",
            }}
          >
            Close
          </Button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <select
            value={selectedValue}
            onChange={handlePageNation}
            style={{
              width: "160px",
              height: "36px",
              marginTop: "10px",
              background: "linear-gradient(to right, white 88%, lavender 12%)",
              position: "relative",
              bottom: 4,
            }}
            sx={{
              color: "black",
              background: "linear-gradient(to right, white 95%, lavender 5%)",
            }}
          >
            <option value="10">10 Records per page</option>
            <option value="1">1 Records per page</option>
            <option value="3">3 Records per page</option>

            <option value="5">5 Records per page</option>

            <option value="20">20 Records per page</option>
          </select>

          <Button
            sx={{
              color: "black",
              marginLeft: "8px",
              marginRight: "8px",
              position: "relative",
              bottom: 4,
              background:
                "linear-gradient(to right, lavender 0%, lavender 20%, white 20%, white 80%, lavender 80%, lavender 100%)",
            }}
          >
            <ArrowLeftIcon
              sx={{ bcolor: "black", position: "relative", right: 10 }}
              onClick={() =>
                handlePageChange(
                  Math.ceil(parseInt(currentPage) - parseInt(selectedValue))
                )
              }
            />
            {firstpage + 1} of {lastpage}
            <ArrowRightIcon
              sx={{ color: "black", position: "relative", left: 10 }}
              onClick={() =>
                handlePageChange(
                  Math.ceil(parseInt(currentPage) + parseInt(selectedValue))
                )
              }
            />
          </Button>
          <Button onClick={addNewRow}>c</Button>
          <Button
            variant="contained"
            onClick={handleNavigate}
            sx={{
              color: "white",
              backgroundColor: "blue",
              marginRight: "18px",
              position: "relative",
              bottom: 4,
            }}
          >
            Add Data
          </Button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>body</th>
          </tr>
        </thead>
        {data ? (
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.title}</td>
                <td>{row.body}</td>
                <td>
                  <button onClick={() => deleteRow(row.id)}>Delete</button>
                  <button onClick={() => editRow(row.id)}>edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan="2">Loading...</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default CompaniesTable;
