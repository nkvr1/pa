import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import EditIcon from "@mui/icons-material/Edit";
import Account from "./components/AccountData/Account";

function TableComponent1({ data, setData }) {
  const [editingId, setEditingId] = useState(null);

  const [selectedRow, setSelectedRow] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleDeleteClick = (row) => {
    setSelectedRow(row);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedRow) {
      // Filter out the selected row from the data
      setData((prevData) =>
        prevData.filter((item) => item.id !== selectedRow.id)
      );

      setIsDeleteDialogOpen(false);
      setSelectedRow(null);
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteDialogOpen(false);
    setSelectedRow(null);
  };

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
        <div className="Simple-1">
          <Button
            sx={{
              color: "black",
              background: "linear-gradient(to right, white 80%, lavender 20%)",
            }}
          >
            No of pages
            <ArrowDropDownIcon
              sx={{ color: "black", position: "relative", left: 5 }}
            />
          </Button>
          <Button
            sx={{
              color: "black",
              marginLeft: "10px",
              marginRight: "10px",
              background:
                "linear-gradient(to right, lavender 0%, lavender 20%, white 20%, white 80%, lavender 80%, lavender 100%)",
            }}
          >
            <ArrowLeftIcon
              sx={{ bcolor: "black", position: "relative", right: 10 }}
            />
            1 to 9
            <ArrowRightIcon
              sx={{ color: "black", position: "relative", left: 10 }}
            />
          </Button>

          <Button
            variant="contained"
            sx={{ color: "white", backgroundColor: "blue" }}
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
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>title</TableCell>
                  <TableCell>body</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
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
                          <SaveAltIcon />
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
                              <EditIcon />
                            </Button>
                            <Button
                              variant="outlined"
                              color="secondary"
                              startIcon={<DeleteIcon />}
                              onClick={() => handleDeleteClick(row)}
                            ></Button>
                          </div>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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

export default TableComponent1;
