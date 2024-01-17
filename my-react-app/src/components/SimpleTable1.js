import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const initialData = [
  {
    id: 1,
    name: "Pavan",
    age: 25,
    Account: "statebank",
    city: "tadepalligudem",
    status: "Assigned",
  },
  {
    id: 2,
    name: "Sri",
    age: 30,
    Account: "andhrabank",
    city: "tadepalligudem",
    status: "new",
  },
  {
    id: 3,
    name: "Prudhvi",
    age: 28,
    Account: "statebank",
    city: "tanuku",
    status: "Assigned",
  },
  {
    id: 4,
    name: "Varma",
    age: 28,
    Account: "andhrabank",
    city: "tadepalligudem",
    status: "Assigned",
  },
  {
    id: 5,
    name: "Srinivasa",
    age: 28,
    Account: "statebank",
    city: "tanuku",
    status: "Assigned",
  },
  {
    id: 6,
    name: "Raju",
    age: 28,
    Account: "statebank",
    city: "tadepalligudem",
    status: "Assigned",
  },
];

function SimpleTable1() {
  const [data, setData] = useState(initialData);
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

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Account</TableCell>
              <TableCell>City</TableCell>
              <TableCell>status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>

                <TableCell>{row.age}</TableCell>
                <TableCell>{row.Account}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDeleteClick(row)}
                  >
                    Delete
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
    </div>
  );
}

export default SimpleTable1;
