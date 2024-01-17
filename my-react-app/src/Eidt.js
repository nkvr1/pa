import React, { useState } from "react";

import {
  Button,
  Card,
  CardContent,
  Divider,
  TextField,
  Typography,
  Container,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
const Eidt = ({ rowData, onSave }) => {
  const navigate = useNavigate();

  const [editedData, setEditedData] = useState(rowData);
  const [editedData1, setEditedData1] = useState(rowData);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSave = () => {
    onSave(editedData);
    navigate("/Cases");
  };

  const handleCancel = () => {
    setEditedData(editedData1);
  };

  const [isDivVisible, setDivVisible] = useState(true);

  const toggleDivVisibility = () => {
    setDivVisible(!isDivVisible);
  };

  return (
    <div className="Simple">
      <div className="Sub-harder">
        <div>
          <Typography variant="h6">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "20px",
              }}
            >
              <Typography>
                <Link to="/" style={{ color: " white" }}>
                  Home/
                </Link>
              </Typography>
              <Typography>
                <Link to="/Cases" style={{ color: " white" }}>
                  Cases/
                </Link>
              </Typography>
              <Typography> Edit</Typography>
            </div>
          </Typography>
        </div>

        <div>
          <Button
            variant="contained"
            sx={{ backgroundColor: "rgb(107, 105, 122)" }}
            onClick={handleCancel}
          >
            <CloseIcon />
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ color: "white", backgroundColor: "blue", marginLeft: 2 }}
            onClick={handleSave}
          >
            <EditIcon />
            Edit
          </Button>
        </div>
      </div>

      <Container>
        <Card sx={{ position: "relative", marginTop: "10px" }}>
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6">Cases Information</Typography>
              <Button onClick={toggleDivVisibility}>
                {isDivVisible ? "^" : "v"}
              </Button>
            </div>
            <Divider />
            {isDivVisible && (
              <div className="Sub-harder2">
                <div className="Sub-harder1">
                  <div className="Sub-harder2">
                    <div>
                      <Typography
                        className="Sub-harder5"
                        sx={{ margin: "10px" }}
                      >
                        Name
                      </Typography>{" "}
                    </div>
                    <div className="Sub-harder3">
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        name="name"
                        sx={{
                          background:
                            "linear-gradient(to left, white 98%, red 2%)",
                        }}
                        value={editedData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5">Status </Typography>
                    </div>
                    <div className="Sub-harder3">
                      {" "}
                      <TextField
                        select
                        type="text"
                        name="Status"
                        value={editedData.Status}
                        onChange={handleInputChange}
                        variant="outlined"
                        size="small"
                        sx={{
                          background:
                            "linear-gradient(to right, white 85%, lavender 15%)",
                          borderLeft: "4px solid orange",
                        }}
                        fullWidth
                      >
                        {" "}
                        {/* Step 3: Create the Dropdown Options */}
                        <MenuItem value="Andhra Pradesh">
                          Andhra Pradesh
                        </MenuItem>
                        <MenuItem value="Bihar">Bihar</MenuItem>
                        <MenuItem value="Goa">Goa</MenuItem>
                      </TextField>
                    </div>
                  </div>

                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5">
                        {" "}
                        Priority{" "}
                      </Typography>
                    </div>
                    <div className="Sub-harder3">
                      {" "}
                      <TextField
                        select
                        name="Priority"
                        value={editedData.Priority}
                        onChange={handleInputChange}
                        variant="outlined"
                        size="small"
                        sx={{
                          background:
                            "linear-gradient(to right, white 85%, lavender 15%)",
                        }}
                        fullWidth
                      >
                        {" "}
                        {/* Step 3: Create the Dropdown Options */}
                        <MenuItem value="hindi">hindi</MenuItem>
                        <MenuItem value="English">English</MenuItem>
                        <MenuItem value="telugu">telugu</MenuItem>
                      </TextField>
                    </div>
                  </div>

                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5">Types </Typography>
                    </div>
                    <div className="Sub-harder3">
                      <TextField
                        select
                        name="Types"
                        value={editedData.Types}
                        onChange={handleInputChange}
                        variant="outlined"
                        size="small"
                        sx={{
                          background:
                            "linear-gradient(to right, white 85%, lavender 15%)",
                        }}
                        fullWidth
                      >
                        <MenuItem value="CivilCases">Civil Cases</MenuItem>
                        <MenuItem value="FamilyCases">Family Cases</MenuItem>
                        <MenuItem value="CriminalCases">
                          Criminal Cases
                        </MenuItem>
                      </TextField>
                    </div>
                  </div>

                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5">Account</Typography>
                    </div>
                    <div className="Sub-harder3">
                      {" "}
                      <TextField
                        variant="outlined"
                        size="small"
                        name="Account"
                        value={editedData.Account}
                        onChange={handleInputChange}
                        fullWidth
                      />
                    </div>
                  </div>

                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5">CloseDate</Typography>
                    </div>
                    <div className="Sub-harder3">
                      <TextField
                        variant="outlined"
                        type="Date"
                        size="small"
                        name="CloseDate"
                        value={editedData.CloseDate}
                        onChange={handleInputChange}
                        fullWidth
                      />
                    </div>
                  </div>
                </div>

                <div className="Sub-harder4">
                  <div className="Sub-harder2">
                    <div>
                      <Typography
                        className="Sub-harder5"
                        sx={{ margin: "10px" }}
                      >
                        Contacts{" "}
                      </Typography>
                    </div>
                    <div className="Sub-harder3">
                      <TextField
                        variant="outlined"
                        size="small"
                        name="Contacts"
                        value={editedData.Contacts}
                        onChange={handleInputChange}
                        fullWidth
                      />
                    </div>
                  </div>
                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5">Teams</Typography>
                    </div>
                    <div className="Sub-harder3">
                      {" "}
                      <TextField
                        variant="outlined"
                        size="small"
                        name="Teams"
                        sx={{
                          background:
                            "linear-gradient(to left, white 98%, red 2%)",
                        }}
                        value={editedData.Teams}
                        onChange={handleInputChange}
                        fullWidth
                      />
                    </div>
                  </div>
                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5"> Users</Typography>
                    </div>
                    <div className="Sub-harder3">
                      {" "}
                      <TextField
                        variant="outlined"
                        size="small"
                        name="Users"
                        value={editedData.Users}
                        onChange={handleInputChange}
                        fullWidth
                      />
                    </div>
                  </div>
                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5">
                        {" "}
                        AssignedUsers
                      </Typography>
                    </div>
                    <div className="Sub-harder3">
                      {" "}
                      <TextField
                        variant="outlined"
                        size="small"
                        name="AssignedUsers"
                        value={editedData.AssignedUsers}
                        onChange={handleInputChange}
                        fullWidth
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Eidt;
