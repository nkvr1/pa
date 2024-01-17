import React, { useState } from "react";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import {
  Button,
  Card,
  CardContent,
  Divider,
  TextField,
  Typography,
  Container,
  MenuItem,
  InputAdornment,
  Autocomplete,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
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
import AddIcon from "@mui/icons-material/Add";
import PublishIcon from "@mui/icons-material/Publish";

const AccountEidt = ({ rowData, onSave }) => {
  const [editedData, setEditedData] = useState(rowData);
  const [editedData1, setEditedData1] = useState(rowData);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData({ ...editedData, [name]: value });
  };
  const navigate = useNavigate();
  const handleSave = () => {
    onSave(editedData);
    navigate("/account");
  };
  const handleCancel = () => {
    setEditedData(editedData1);
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
                <Link to="/Account" style={{ color: " white" }}>
                  Account/
                </Link>
              </Typography>
              <Typography>Add Account</Typography>
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
                        name="name"
                        value={editedData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="Sub-harder2">
                    <div>
                      <Typography
                        className="Sub-harder5"
                        sx={{ margin: "10px" }}
                      >
                        Phone Number
                      </Typography>{" "}
                    </div>
                    <div className="Sub-harder3">
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        name="PhoneNumber"
                        value={editedData.PhoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5">Skype ID</Typography>{" "}
                    </div>
                    <div className="Sub-harder3">
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        name="Skype ID"
                        placeholder="Skype ID"
                      />
                    </div>
                  </div>

                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5">
                        Organization
                      </Typography>{" "}
                    </div>
                    <div className="Sub-harder3">
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        name="Organization"
                        value={editedData.Organization}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5">
                        Contact Name{" "}
                      </Typography>
                    </div>

                    <div className="Sub-harder3">
                      {" "}
                      <TextField
                        select
                        name="ContactName"
                        size="small"
                        fullWidth
                        variant="outlined"
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
                        <MenuItem value="single">single</MenuItem>
                        <MenuItem value="married">married</MenuItem>
                      </TextField>
                    </div>
                  </div>

                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5">
                        {" "}
                        Industry{" "}
                      </Typography>
                    </div>
                    <div className="Sub-harder3">
                      {" "}
                      <Autocomplete
                        style={{ width: 300 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            sx={{
                              background:
                                "linear-gradient(to right, white 85%, lavender 15%)",
                            }}
                            size="small"
                            fullWidth
                            variant="outlined"
                          />
                        )}
                      />
                    </div>
                  </div>

                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5">
                        Attachment{" "}
                      </Typography>
                    </div>
                    <div className="Sub-harder3">
                      <Button
                        component="label"
                        sx={{
                          width: "300px",
                          border: "1px solid black",
                          background:
                            "linear-gradient(to right, white 85%, lavender 15%)",
                        }}
                        startIcon={
                          <VerticalAlignTopIcon
                            sx={{ position: "relative", left: 135 }}
                          />
                        }
                      ></Button>
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
                        Website{" "}
                      </Typography>
                    </div>
                    <div className="Sub-harder3">
                      <TextField
                        variant="outlined"
                        size="small"
                        type="text"
                        name="Website"
                        placeholder="Website"
                        fullWidth
                      />
                    </div>
                  </div>
                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5">
                        Email Address
                      </Typography>
                    </div>
                    <div className="Sub-harder3">
                      {" "}
                      <TextField
                        variant="outlined"
                        size="small"
                        name="EmailAddress"
                        placeholder="EmailAddress"
                        value={editedData.EmailAddress}
                        onChange={handleInputChange}
                        fullWidth
                      />
                    </div>
                  </div>
                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5"> Leads</Typography>
                    </div>
                    <div className="Sub-harder3">
                      {" "}
                      <TextField
                        variant="outlined"
                        size="small"
                        sx={{
                          background:
                            "linear-gradient(to right, white 85%, lavender 15%)",
                        }}
                        fullWidth
                      ></TextField>
                    </div>
                  </div>
                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5"> Teams</Typography>
                    </div>
                    <div className="Sub-harder3">
                      {" "}
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder=" Teams"
                        fullWidth
                      />
                    </div>
                  </div>
                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5">
                        {" "}
                        Assigned To
                      </Typography>
                    </div>
                    <div className="Sub-harder3">
                      {" "}
                      <Autocomplete
                        id="my-autocomplete"
                        style={{ width: 300 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            sx={{
                              background:
                                "linear-gradient(to right, white 85%, lavender 15%)",
                            }}
                            size="small"
                            fullWidth
                            variant="outlined"
                          />
                        )}
                      />{" "}
                    </div>
                  </div>

                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5"> Tags</Typography>
                    </div>
                    <div className="Sub-harder6">
                      {" "}
                      <TextField placeholder="Tags" fullWidth></TextField>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

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
                        Billing Address
                      </Typography>{" "}
                    </div>
                    <div className="Sub-harder3">
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        name="Billing Address"
                        placeholder="Billing Address"
                      />
                    </div>
                  </div>

                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5">
                        Postal Code
                      </Typography>{" "}
                    </div>
                    <div className="Sub-harder3">
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        name="Postal Code"
                        placeholder="Postal Code"
                      />
                    </div>
                  </div>

                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5">State</Typography>{" "}
                    </div>
                    <div className="Sub-harder3">
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        name="State"
                        placeholder="State"
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
                        Street{" "}
                      </Typography>
                    </div>
                    <div className="Sub-harder3">
                      <TextField
                        variant="outlined"
                        size="small"
                        type="text"
                        name="Street"
                        placeholder="Street"
                        fullWidth
                      />
                    </div>
                  </div>
                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5">City</Typography>
                    </div>
                    <div className="Sub-harder3">
                      {" "}
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder="City"
                        fullWidth
                      />
                    </div>
                  </div>
                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5"> Country</Typography>
                    </div>
                    <div className="Sub-harder3">
                      {" "}
                      <TextField
                        variant="outlined"
                        size="small"
                        sx={{
                          background:
                            "linear-gradient(to right, white 85%, lavender 15%)",
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <ArrowDropDownIcon
                                sx={{ position: "relative", left: 250 }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        fullWidth
                      />
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

export default AccountEidt;
