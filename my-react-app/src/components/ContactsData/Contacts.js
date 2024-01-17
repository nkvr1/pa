import React, { useEffect, useState } from "react";

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
} from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

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

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
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
    id: "id",
    numeric: false,
    label: "id",
  },
  {
    id: "title",
    numeric: true,
    label: "title",
  },
  {
    id: "body",
    numeric: true,
    label: "body",
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

function Contacts() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selectedValue, setSelectedValue] = useState(10);
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);
  useEffect(() => {
    // Fetch data using GET method
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}&q=${searchTerm}`
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
    console.log(data);
  }, [start, limit, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setStart(0);
  };

  const visibleRows = React.useMemo(() =>
    tableSort(data, getComparator(order, orderBy))
  );
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const tabledata = visibleRows;

  const lastpage = Math.ceil(100 / selectedValue);
  const firstpage = Math.ceil(start / selectedValue);

  const handleNextPage = () => {
    setStart((prevPage) => parseInt(prevPage) + parseInt(selectedValue));
  };

  const handlePrevPage = () => {
    setStart((prevPage) => parseInt(prevPage) - parseInt(selectedValue));
  };

  const handlePageNation = (event) => {
    setSelectedValue(event.target.value);
    setLimit(event.target.value);
    setStart(0);

    console.log(event.target.value);
  };

  const deleteRow = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Remove the deleted row from the data
        const updatedTableData = data.filter((item) => item.id !== id);
        setData(updatedTableData);
        setEditingId(null);
      })
      .catch((error) => console.error("Error deleting row:", error));
  };

  const [editableRowId, setEditableRowId] = useState(null);

  const saveUpdatedRow = (id, newData) => {
    // Make a PUT request to the API to update the row
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((updatedData) => {
        const updatedTableData = data.map((item) =>
          item.id === id ? updatedData : item
        );
        setData(updatedTableData);
        setEditingId(null);
      })
      .catch((error) => console.error("Error updating row:", error));
  };

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
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
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
              onClick={handlePrevPage}
            />
            {firstpage + 1} to {lastpage}
            <ArrowRightIcon
              sx={{ color: "black", position: "relative", left: 10 }}
              onClick={handleNextPage}
            />
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
                  {tabledata.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>

                      <TableCell>
                        {" "}
                        {editingId === row.id ? (
                          <input
                            type="text"
                            value={row.title}
                            onChange={(e) => {
                              const updatedData = {
                                ...row,
                                title: e.target.value,
                              };
                              saveUpdatedRow(row.id, updatedData);
                            }}
                          />
                        ) : (
                          row.title
                        )}
                      </TableCell>
                      <TableCell>
                        {" "}
                        {editingId === row.id ? (
                          <input
                            type="text"
                            value={row.body}
                            onChange={(e) => {
                              const updatedData = {
                                ...row,
                                body: e.target.value,
                              };
                              saveUpdatedRow(row.id, updatedData);
                            }}
                          />
                        ) : (
                          row.body
                        )}
                      </TableCell>
                      <TableCell>
                        {" "}
                        {editingId === row.id ? (
                          <button onClick={() => saveUpdatedRow(row.id, row)}>
                            Save
                          </button>
                        ) : (
                          <>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => setEditingId(row.id)}
                              >
                                Edit
                              </Button>
                              <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => deleteRow(row.id)}
                              >
                                Delete
                              </Button>
                            </div>
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
}

export default Contacts;
