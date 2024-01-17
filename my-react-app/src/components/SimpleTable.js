import React, { useState } from "react";
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

import { useNavigate } from "react-router-dom";

function SimpleTable({ initialData, onEdit }) {
  const [data, setData] = useState(initialData);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const [selectedValue, setSelectedValue] = useState(5);

  const [one, setOne] = useState(0);
  const [last, setLast] = useState(5);

  const rowsPerPage = selectedValue;

  const currentRows = data.slice(one, last);

  const handleNextPage = () => {
    setOne((prevPage) => parseInt(prevPage) + parseInt(rowsPerPage));
    setLast((prevPage) => parseInt(prevPage) + parseInt(rowsPerPage));
  };

  const handlePrevPage = () => {
    setOne((prevPage) => parseInt(prevPage) - parseInt(rowsPerPage));
    setLast((prevPage) => parseInt(prevPage) - parseInt(rowsPerPage));
  };

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
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Cases/add-cases");
  };

  const handleChange123 = (event) => {
    setSelectedValue(event.target.value);
    setLast(event.target.value);
    setOne(0);

    console.log(event.target.value);
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
          <select
            value={selectedValue}
            onChange={handleChange123}
            style={{
              width: "120px",
              height: "36px",
              marginTop: "10px",
              background: "linear-gradient(to right, white 80%, lavender 20%)",
            }}
            sx={{
              color: "black",
              background: "linear-gradient(to right, white 80%, lavender 20%)",
            }}
          >
            <option value="5">No of pages 5</option>
            <option value="1">No of pages 1</option>
            <option value="3">No of pages 3</option>
            <option value="8">No of pages 8</option>
            <option value="10">No of pages 10</option>
            <option value="15">No of pages 15</option>
          </select>

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
              onClick={handlePrevPage}
            />
            {one + 1} to {last}
            <ArrowRightIcon
              sx={{ color: "black", position: "relative", left: 10 }}
              onClick={handleNextPage}
            />
          </Button>

          <Button
            variant="contained"
            onClick={handleNavigate}
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
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Priority</TableCell>
                    <TableCell>Types</TableCell>
                    <TableCell>Account</TableCell>
                    <TableCell>Contacts</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentRows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>

                      <TableCell>{row.Status}</TableCell>
                      <TableCell>{row.Priority}</TableCell>
                      <TableCell>{row.Types}</TableCell>
                      <TableCell>{row.Account}</TableCell>
                      <TableCell>{row.Contacts}</TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          color="secondary"
                          startIcon={<DeleteIcon />}
                          onClick={() => handleDeleteClick(row)}
                        >
                          Delete
                        </Button>
                        <Button
                          variant="outlined"
                          color="secondary"
                          startIcon={<EditIcon />}
                          onClick={() => onEdit(index, navigate("/Cases/Eidt"))}
                        >
                          edit
                        </Button>
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

export default SimpleTable;
