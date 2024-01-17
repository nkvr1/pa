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
import CheckIcon from "@mui/icons-material/Check";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import SpeakerNotesOffIcon from "@mui/icons-material/SpeakerNotesOff";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import { Link, useNavigate } from "react-router-dom";

const Addcases = ({ handleSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    id: initialData.length + 1,
    name: "",
    Status: "",
    Priority: "",
    Types: "",
    Account: "",
    Contacts: "",
  });

  const [formData1, setFormData1] = useState({
    id: initialData.length + 1,
    name: "",
    Status: "",
    Priority: "",
    Types: "",
    Account: "",
    Contacts: "",
  });
  const navigate = useNavigate();
  const handleChange12 = (e) => {
    console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);
  const [error5, setError5] = useState(false);

  const handleFormSubmit1 = () => {
    if (formData.name !== "") {
      setError(false);
    }
    if (formData.Status !== "") {
      setError1(false);
    }
    if (formData.Priority !== "") {
      setError2(false);
    }
    if (formData.Types !== "") {
      setError3(false);
    }
    if (formData.Account !== "") {
      setError4(false);
    }
    if (formData.Contacts !== "") {
      setError5(false);
    }

    if (formData.name === "") {
      setError(true);
    } else if (formData.Status === "") {
      setError1(true);
    } else if (formData.Priority === "") {
      setError2(true);
    } else if (formData.Types === 0) {
      setError3(true);
    } else if (formData.Account === "") {
      setError4(true);
      console.log(error3);
    } else if (formData.Contacts === "") {
      setError5(true);
    } else {
      handleSubmit(formData);
      navigate("/Cases");
    }
  };

  const handleFormSubmit3 = () => {
    setFormData(formData1);
  };

  const [isDivVisible, setDivVisible] = useState(true);
  const [isDivVisible1, setDivVisible1] = useState(true);

  const toggleDivVisibility = () => {
    setDivVisible(!isDivVisible);
  };
  const toggleDivVisibility1 = () => {
    setDivVisible1(!isDivVisible1);
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
              <Typography>Add Cases</Typography>
            </div>
          </Typography>
        </div>

        <div>
          <Button
            variant="contained"
            sx={{ backgroundColor: "rgb(107, 105, 122)" }}
            onClick={handleFormSubmit3}
          >
            <CloseIcon />
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ color: "white", backgroundColor: "blue", marginLeft: 2 }}
            onClick={handleFormSubmit1}
          >
            <CheckIcon />
            Save
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
                        sx={{
                          background:
                            "linear-gradient(to left, white 98%, red 2%)",
                        }}
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange12}
                        error={error}
                        helperText={error ? "Please enter some text." : ""}
                      />
                    </div>
                  </div>

                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5">Status </Typography>
                    </div>
                    <div className="Sub-harder3">
                      <TextField
                        select
                        name="Status"
                        error1={error1}
                        helperText={error1 ? "Please enter some text." : ""}
                        value={formData.Status}
                        onChange={handleChange12}
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
                        error2={error2}
                        helperText={error2 ? "Please enter some text." : ""}
                        value={formData.Priority}
                        onChange={handleChange12}
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
                        error3={error3}
                        helperText={error3 ? "Please enter some text." : ""}
                        name="Types"
                        value={formData.Types}
                        onChange={handleChange12}
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
                        placeholder="Account"
                        error4={error4}
                        helperText={error4 ? "Please enter some text." : ""}
                        value={formData.Account}
                        onChange={handleChange12}
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
                        type="Date"
                        variant="outlined"
                        size="small"
                        placeholder="CloseDate"
                        value={formData.CloseDate}
                        onChange={handleChange12}
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
                        type="number"
                        name="Contacts"
                        placeholder="Contacts"
                        error5={error5}
                        helperText={error5 ? "Please enter some text." : ""}
                        value={formData.Contacts}
                        onChange={handleChange12}
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
                        placeholder="Teams"
                        sx={{
                          background:
                            "linear-gradient(to left, white 98%, red 2%)",
                        }}
                        value={formData.Teams}
                        onChange={handleChange12}
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
                        placeholder="Users"
                        value={formData.Users}
                        onChange={handleChange12}
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
                        placeholder="AssignedUsers"
                        value={formData.AssignedUsers}
                        onChange={handleChange12}
                        fullWidth
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card
          sx={{ position: "relative", paddingTop: "30px", marginTop: "60px" }}
        >
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6">Description</Typography>
              <Button onClick={toggleDivVisibility1}>
                {isDivVisible1 ? "^" : "v"}
              </Button>
            </div>
            <Divider />

            {isDivVisible1 && (
              <div style={{ marginLeft: "20vh", marginTop: "20px" }}>
                <div style={{ display: "flex" }}>
                  Description
                  <Card sx={{ paddingBottom: "100px" }}>
                    {/* <Paper style={{ padding: '20px', borderRadius: '8px',marginTop:"10vh",display:"flex",flexDirection:"row",justifyContent:"flex-start" }}>   */}
                    {/* <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",padding:"20px"}}> */}
                    <CardContent>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <FormatBoldIcon style={{ paddingLeft: "10px" }} />
                        <FormatItalicIcon style={{ paddingLeft: "10px" }} />
                        <FormatUnderlinedIcon style={{ paddingLeft: "10px" }} />
                        <p className="par">|</p>
                        <p>size</p>
                        <ArrowDropDownIcon style={{ paddingLeft: "10px" }} />
                        <p className="par">|</p>
                        <FormatListNumberedIcon
                          style={{ paddingLeft: "10px" }}
                        />
                        <FormatListBulletedIcon
                          style={{ paddingLeft: "10px" }}
                        />
                        <FormatIndentIncreaseIcon
                          style={{ paddingLeft: "10px" }}
                        />
                        <FormatIndentDecreaseIcon
                          style={{ paddingLeft: "10px" }}
                        />
                        <p className="par">|</p>
                        <WallpaperIcon style={{ paddingLeft: "10px" }} />
                        <BackupTableIcon style={{ paddingLeft: "10px" }} />
                        <p className="par">|</p>
                        <InsertLinkIcon style={{ paddingLeft: "10px" }} />
                        <SpeakerNotesOffIcon style={{ paddingLeft: "10px" }} />
                        <p className="par">|</p>
                        <AddReactionIcon style={{ paddingLeft: "10px" }} />
                        <ArrowDropDownIcon style={{ paddingLeft: "10px" }} />
                      </div>
                      <Divider />
                    </CardContent>
                    {/* </Paper> */}
                  </Card>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Addcases;
