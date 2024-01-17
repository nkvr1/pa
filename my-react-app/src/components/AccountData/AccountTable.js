import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import EditIcon from "@mui/icons-material/Edit";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  CardContent,
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import NorthIcon from "@mui/icons-material/North";
import { useNavigate } from "react-router-dom";
import SouthIcon from "@mui/icons-material/South";

import Box from "@mui/material/Box";
import TableSortLabel from "@mui/material/TableSortLabel";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function tableSort(array, comparator) {
  const sortdata = array.map((el, index) => [el, index]);
  sortdata.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return sortdata.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    label: "name",
  },
  {
    id: "PhoneNumber",
    numeric: true,
    label: "PhoneNumber",
  },
  {
    id: "Organization",
    numeric: true,
    label: "Organization",
  },

  {
    id: "Status",
    numeric: true,
    label: "Status",
  },
  {
    id: "Attachment",
    numeric: true,
    label: "Attachment",
  },
  {
    id: "EmailAddress",
    numeric: true,
    label: "EmailAddress",
  },
  {
    id: "attiton",
    numeric: true,
    label: "attiton",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span">
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function AccountTable({ combinedData, onEdit }) {
  const [sortedData, setSortedData] = useState([]);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    setSortedData(combinedData);
    setRows(combinedData);
  }, [combinedData.length > 0]);

  const [selectedRow, setSelectedRow] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const [selectedValue, setSelectedValue] = useState(10);

  const [one, setOne] = useState(0);
  const [last, setLast] = useState(10);
  const [one1, setOne1] = useState(0);

  const rowsPerPage = selectedValue;

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const visibleRows = React.useMemo(() =>
    tableSort(rows.slice(one, last), getComparator(order, orderBy))
  );

  const tabledata = visibleRows;
  const tablelength = rows.length;

  const lastpage =
    tablelength % selectedValue !== 0
      ? Math.ceil(rows.length / selectedValue)
      : rows.length / selectedValue;

  const handleNextPage = () => {
    if (one1 < lastpage - 1) {
      setOne((prevPage) => parseInt(prevPage) + parseInt(rowsPerPage));
      setLast((prevPage) => parseInt(prevPage) + parseInt(rowsPerPage));

      setOne1((prevPage) => parseInt(prevPage) + parseInt(1));
    }
  };

  const handlePrevPage = () => {
    if (one1 > 0) {
      setOne((prevPage) => parseInt(prevPage) - parseInt(rowsPerPage));
      setLast((prevPage) => parseInt(prevPage) - parseInt(rowsPerPage));
      setOne1((prevPage) => parseInt(prevPage) - parseInt(1));
    }
  };

  const handleDeleteClick = (row) => {
    setSelectedRow(row);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedRow) {
      const updatedData = rows.filter((item) => item.name !== selectedRow.name);
      setRows(updatedData);
      setIsDeleteDialogOpen(false);
      setSelectedRow(null);
      console.log(rows, "rows");
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteDialogOpen(false);
    setSelectedRow(null);
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/account/AddAccount");
  };

  const handleChange123 = (event) => {
    setSelectedValue(event.target.value);
    setLast(event.target.value);
    setOne(0);
    setOne1(0);

    console.log(event.target.value);
  };
  const [search, setSearch] = useState([]);
  const regex = new RegExp(search, "i");

  const filteredData = rows.filter((item) => regex.test(item.name));

  function searchdata(e) {
    setSearch(e.target.value);
    if (search !== "") {
      setRows(filteredData);
      setOne(0);
      setOne1(0);
    } else {
      setRows(combinedData);
    }
  }

  return (
    <div className="Simple">
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
            onChange={handleChange123}
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
            <AddCircleIcon />
            Add Cases
          </Button>
        </div>
      </div>
      <Card
        sx={{
          maxwidth: "100%",
          backgroundColor: "rgb(250, 250, 250)",
          paddingBottom: "123px",
          position: "relative",
          right: 1,
        }}
      >
        <CardContent>
          <TableContainer
            component={Paper}
            sx={{ maxwidth: "100%", position: "relative", bottom: 11 }}
          >
            <TableContainer component={Paper}>
              <Table>
                <EnhancedTableHead onRequestSort={handleRequestSort} />

                <TableBody>
                  {tabledata.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.name}</TableCell>

                      <TableCell>{row.PhoneNumber}</TableCell>
                      <TableCell>{row.Organization}</TableCell>
                      {/* <TableCell>{row.title}</TableCell> */}
                      {/* <TableCell >
                        
                        {row.ContactName.length > 2?(row.ContactName.slice(0, 2).map((e)=>{

                          return <p sx={{px:2}}>{e.value}<>
                        <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Remaining Data</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <ul>
            {row.ContactName.slice(2).map((item, index) => (
              <li key={index}>{item.value}</li>
            ))}
          </ul>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>

                        </> </p>
                        })): row.ContactName.map((e)=>{
                        
                          
                        
                          return <p sx={{px:2}}>{e.value} </p>
                        })}

                       {row.ContactName.length > 2? <AddIcon  color="primary" onClick={handleOpen} />:"."}
              
                      </TableCell> */}
                      <TableCell>{row.Status}</TableCell>
                      <TableCell>
                        <img
                          src={row.Attachment}
                          style={{ maxWidth: "100px" }}
                        />
                      </TableCell>
                      <TableCell>{row.EmailAddress}</TableCell>

                      <TableCell>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          {" "}
                          <div>
                            <Button
                              variant="outlined"
                              color="secondary"
                              startIcon={<DeleteIcon />}
                              onClick={() => handleDeleteClick(row)}
                            ></Button>
                          </div>{" "}
                          <div>
                            <Button
                              variant="outlined"
                              color="secondary"
                              startIcon={<EditIcon />}
                              onClick={() =>
                                onEdit(index, navigate("/account/AccountEidt"))
                              }
                            ></Button>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Dialog open={isDeleteDialogOpen} onClose={handleDeleteCancel}>
              <DialogTitle>Confirm Delete</DialogTitle>
              <DialogContent>
                <Typography>
                  Are you sure you want to delete "
                  {selectedRow ? selectedRow.name : ""}"?
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
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
}

export default AccountTable;
