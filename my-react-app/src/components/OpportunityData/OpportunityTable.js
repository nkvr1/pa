import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  tableData,
  tableDataselectedValue,
  AddColumnData,
} from "../../ActionData/OpportunityActions";

import { Popover, MenuItem, ListItemText } from "@mui/material";

const OpportunityTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const newDataExtra = useSelector(
    (state) => state.OpportunityState.newDataExtra
  );
  const length = useSelector((state) => state.OpportunityState.dataLength);
  // const direction = useSelector((state) => state.OpportunityState.direction);
  const currentPage = useSelector(
    (state) => state.OpportunityState.currentPage
  );

  useEffect(() => {
    if (newDataExtra.length === 0) {
      dispatch(tableData());
    }
  }, []);

  // useEffect(() => {
  //   const newData = newDataExtra.map((item) => ({
  //     ...item,
  //     country: "Unknown",
  //   }));
  //   dispatch(AddColumnData(newData));
  // }, [newDataExtra]);

  const [selectedRow, setSelectedRow] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(10);
  const [one1, setOne1] = useState(0);
  const [sort, setSort] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const lastpage =
    length % selectedValue !== 0
      ? Math.ceil(length / selectedValue)
      : length / selectedValue;

  const handleNextPage = () => {
    if (one1 < lastpage - 1) {
      dispatch({ type: "HANDLENEXTPAGE" });
      setOne1((prevPage) => parseInt(prevPage) + parseInt(1));
    }
  };

  const handlePrevPage = () => {
    if (one1 > 0) {
      dispatch({ type: "HANDLEPREPAGE" });
      setOne1((prevPage) => parseInt(prevPage) - parseInt(1));
    }
  };

  const handleChangeRecords = (event) => {
    dispatch(tableDataselectedValue(event));

    setSelectedValue(event.target.value);
    setOne1(0);

    console.log(event.target.value);
  };
  const [search, setSearch] = useState([]);

  function searchdata(e) {
    setSearch(e.target.value);
    if (search !== "") {
      dispatch({ type: "FILTEREDDATA", payload: search });
      setOne1(0);
    } else {
      dispatch({ type: "FILTERED" });
    }
  }

  const handleDeleteClick = (row) => {
    setSelectedRow(row);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedRow) {
      const id = selectedRow.id;
      console.log(id, "id");
      dispatch({ type: "DELETE", payload: id });
      // setData1(updatedData);
      setIsDeleteDialogOpen(false);
      setSelectedRow(null);
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteDialogOpen(false);
    setSelectedRow(null);
  };
  const editRow = (value) => {
    dispatch({ type: "EDITROW", payload: value });
    navigate("/Opportunity/OpportunityEdit");
  };
  const handleNavigate = () => {
    navigate("/Opportunity/OpportunityAdd");
  };

  const ascending = (columnName) => {
    dispatch({ type: "ASCENDING", payload: columnName });
  };
  const descending = (columnName) => {
    dispatch({ type: "ASCENDING1", payload: columnName });
  };
  const descending1 = (columnName) => {
    dispatch({ type: "SORT_TABLE", payload: columnName });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "sort-popover" : undefined;

  return (
    <div>
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
          {sort ? (
            <ArrowUpwardIcon onClick={handleClick} />
          ) : (
            <ArrowDownwardIcon onClick={handleClick} />
          )}
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={() => ascending("title")}>A-Z</MenuItem>
            <MenuItem onClick={() => descending("title")}>Z-A</MenuItem>
            <MenuItem onClick={() => descending("level")}>Low-High</MenuItem>
            <MenuItem onClick={() => ascending("level")}>High-Low</MenuItem>
          </Popover>

          <input
            type="text"
            onChange={searchdata}
            placeholder="search"
            style={{
              width: "160px",
              height: "30px",
              marginRight: "8px",
              position: "relative",
              bottom: 4,
            }}
          />

          <select
            value={selectedValue}
            onChange={handleChangeRecords}
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
              onClick={handlePrevPage}
            />
            {one1 + 1} to {lastpage}
            <ArrowRightIcon
              sx={{ color: "black", position: "relative", left: 10 }}
              onClick={handleNextPage}
            />
          </Button>
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
            <th>level</th>
            <th>body</th>
          </tr>
        </thead>

        <tbody>
          {newDataExtra.map((row, i) => (
            <tr key={i}>
              <td>{currentPage + i + 1}</td>
              <td>{row.title}</td>
              <td>{row.level}</td>
              <td>{row.body}</td>
              <td>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDeleteClick(row)}
                ></Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<EditIcon />}
                  onClick={() => editRow(row.id)}
                ></Button>
              </td>
            </tr>
          ))}
        </tbody>
        <Dialog open={isDeleteDialogOpen} onClose={handleDeleteCancel}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            <Typography>
              Are you sure you want to delete "
              {selectedRow ? selectedRow.title : ""}"?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={handleDeleteConfirm} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </table>
    </div>
  );
};

export default OpportunityTable;
