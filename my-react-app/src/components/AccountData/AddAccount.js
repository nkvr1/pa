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
  IconButton,
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

const AddAccount = ({ handleSubmit, initialData }) => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const [selectedValues, setSelectedValues] = React.useState([]);
  const [selectedValues1, setSelectedValues1] = React.useState([]);

  const options = [
    { label: 8393000309, value: 8393000309 },
    { label: 7981600779, value: 7981600779 },
    { label: 8971600779, value: 8971600779 },
    { label: 9876554779, value: 79876554779 },
    { label: 7981895566, value: 7981895566 },
    { label: 7981668854, value: 7981668854 },
  ];
  const options1 = [
    { label: "married", value: "married" },
    { label: "single", value: "single" },
    { label: "", value: "" },

    // Add more options here
  ];
  const options2 = [
    { label: "Commerce", value: "Commerce" },
    { label: "Construction", value: "Construction" },
    { label: "Education", value: "CEducation" },
    { label: "Food", value: "Food" },
  ];

  const options4 = [
    { label: "Team1", value: "Team1" },
    { label: "Team2", value: "Team2" },
    { label: "Team3", value: "Team3" },
    { label: "Team4", value: "Team4" },
  ];

  const [options3] = useState([
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
  ]);
  function handleSelectionChange(event) {
    setSelectedValues1(event.target.value);
  }

  const [formData, setFormData] = useState({
    id: initialData.length + 1,
    name: "",
    PhoneNumber: "",
    Organization: "",
    ContactName: [],
    Status: "",
    Attachment: "",
    EmailAddress: "",
  });

  const [formData1, setFormData1] = useState({
    id: initialData.length + 1,
    name: "",
    PhoneNumber: "",
    Organization: "",
    ContactName: [],
    Status: "",
    Attachment: "",
    EmailAddress: "",
  });
  const navigate = useNavigate();
  const handleChange12 = (e) => {
    console.log(e.target);
    console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [inputValue, setInputValue] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);
  const [error5, setError5] = useState(false);
  const [error6, setError6] = useState(false);
  const handleFormSubmit1 = () => {
    if (formData.name !== "") {
      setError(false);
    }
    if (formData.PhoneNumber !== "") {
      setError1(false);
    }
    if (formData.Organization !== "") {
      setError2(false);
    }

    if (formData.Status !== "") {
      setError4(false);
    }
    if (formData.selectedFile !== "") {
      setError5(false);
    }
    if (formData.EmailAddress !== "") {
      setError6(false);
    }

    if (formData.name === "") {
      setError(true);
    }
    if (formData.PhoneNumber === "") {
      setError1(true);
    }
    if (formData.Organization === "") {
      setError2(true);
    }

    if (formData.Status === "") {
      setError4(true);
      console.log(error3);
    }
    if (formData.Attachment === "") {
      setError5(true);
    }

    const inputValue = formData.EmailAddress;
    setIsEmail(inputValue.includes("@"));
    setInputValue(inputValue);
    if (isEmail) {
      setError6(false);
    } else {
      setError6(true);
    }

    if (
      formData.EmailAddress === "" ||
      formData.Attachment === "" ||
      formData.Status === "" ||
      formData.Organization === "" ||
      formData.PhoneNumber === "" ||
      formData.name === ""
    ) {
      setError5(true);
    } else {
      handleSubmit(formData);
      navigate("/Account");
    }
  };

  const handleFormSubmit3 = () => {
    setFormData(formData1);

    setError(false);
    setError1(false);
    setError2(false);
    setError3(false);
    setError4(false);
    setError6(false);
    setSelectedFile(false);
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    setSelectedFile(file);
    setFormData((prevData) => ({
      ...prevData,
      Attachment: URL.createObjectURL(file),
    }));
    console.log(formData);
  };
  const handleFileChange5 = () => {
    const file = "null";

    setSelectedFile(false);
    setFormData((prevData) => ({
      ...prevData,
      Attachment: null,
    }));
    console.log(formData);
  };

  const [isDivVisible, setDivVisible] = useState(true);
  const [isDivVisible1, setDivVisible1] = useState(true);

  const toggleDivVisibility = () => {
    setDivVisible(!isDivVisible);
  };
  const toggleDivVisibility1 = () => {
    setDivVisible1(!isDivVisible1);
  };

  const inputFieldStyle = {
    background: "linear-gradient(to left, white 98%, red 2%)",
  };
  const inputFieldStyle1 = {
    backgroundColor: "lightblue",
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
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange12}
                        error={error}
                        helperText={error ? "Please enter some text." : ""}
                        InputProps={{
                          style: inputFieldStyle,
                        }}
                      ></TextField>
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
                        placeholder="PhoneNumber"
                        value={formData.PhoneNumber}
                        onChange={handleChange12}
                        className="custom-textfield"
                        InputProps={{
                          style: inputFieldStyle,
                        }}
                        error={error1}
                        helperText={error1 ? "Please enter some text." : ""}
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
                        placeholder="Organization"
                        value={formData.Organization}
                        InputProps={{
                          style: inputFieldStyle,
                        }}
                        onChange={handleChange12}
                        error={error2}
                        helperText={error2 ? "Please enter " : ""}
                      />
                    </div>
                  </div>

                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5">
                        Contact Name{" "}
                      </Typography>
                    </div>
                    {/* <div className='Sub-harder3' > <TextField
                   
                      name="Contact Name"
                
                      variant="outlined"
                      size="small"
                      sx ={{background: 'linear-gradient(to right, white 85%, lavender 15%)'}}
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                             <AddIcon sx={{ position: 'relative', left: 250 }} />
                          </InputAdornment>
                        ),
                      }}

                    
                    >  
                    </TextField></div> */}
                    <div className="Sub-harder3">
                      {" "}
                      <Autocomplete
                        multiple
                        name="ContactName"
                        options={options}
                        value={formData.ContactName ?? ""}
                        onChange={(event, newValue) => {
                          setFormData((prevData) => ({
                            ...prevData,
                            ContactName: newValue,
                          }));
                        }}
                        style={{ width: 300 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            name="ContactName"
                            size="small"
                            fullWidth
                            error={error3}
                            helperText={
                              error3 ? "Please select at least one option." : ""
                            }
                            variant="outlined"
                            InputProps={{
                              ...params.InputProps,
                              endAdornment: (
                                <AddIcon
                                  style={{
                                    cursor: "pointer",
                                    position: "relative",
                                    left: 30,
                                  }}
                                />
                              ),
                            }}
                          />
                        )}
                      ></Autocomplete>
                    </div>
                  </div>

                  <div className="Sub-harder2">
                    <div>
                      <Typography className="Sub-harder5">Status </Typography>
                    </div>
                    <div className="Sub-harder3">
                      <Autocomplete
                        options={options1}
                        name="Status"
                        value={formData.Status}
                        onChange={(event, newValue) => {
                          console.log(event.target.name, newValue);
                          setFormData((prevData) => ({
                            ...prevData,
                            Status: newValue.value,
                          }));
                          setSelectedValues(newValue);
                        }}
                        // getOptionLabel={(options) => options.value}
                        style={{ width: 300 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            name="status"
                            error={error4}
                            helperText={error4 ? "Please enter " : ""}
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
                        {" "}
                        Industry{" "}
                      </Typography>
                    </div>
                    <div className="Sub-harder3">
                      {" "}
                      <Autocomplete
                        options={options2}
                        getOptionLabel={(option) => option.label}
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
                      <TextField
                        component="label"
                        size="small"
                        fullWidth
                        sx={{
                          background:
                            "linear-gradient(to right, white 85%, lavender 15%)",
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <VisuallyHiddenInput
                                type="file"
                                name="Attachment"
                                onChange={handleFileChange}
                              />
                              {selectedFile ? (
                                <p>
                                  {selectedFile.name}{" "}
                                  <CloseIcon onClick={handleFileChange5} />
                                </p>
                              ) : (
                                "enter"
                              )}
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <IconButton>
                              <VerticalAlignTopIcon
                                sx={{ position: "relative", left: 10 }}
                              />
                            </IconButton>
                          ),
                        }}
                        name="Attachment"
                        onChange={handleFileChange}
                      >
                        {" "}
                      </TextField>
                    </div>
                  </div>

                  {/* <div className='Sub-harder2' >
                    <div><Typography className='Sub-harder5'>Account</Typography></div>
                    <div className='Sub-harder3' > <TextField variant="outlined" size="small" name="Account"
                        placeholder="Account"
                        value={formData.Account}
                        onChange={handleChange12} fullWidth /></div>
                  </div>

                  <div className='Sub-harder2' >
                    <div><Typography className='Sub-harder5'>CloseDate</Typography></div>
                    <div className='Sub-harder3' >
                      <TextField variant="outlined" size="small" placeholder="CloseDate"
                    value={formData.CloseDate}
                    onChange={handleChange12} fullWidth /></div>
                  </div> */}
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
                        type="email"
                        name="EmailAddress"
                        placeholder="Email Address"
                        value={formData.EmailAddress}
                        onChange={handleChange12}
                        error={error6}
                        helperText={error6 ? "Please enter email text." : ""}
                        // error={isEmail}

                        // helperText={error ? '': 'Please enter email.' }
                        InputProps={{
                          style: inputFieldStyle,
                        }}
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
                        value={selectedValues1}
                        onChange={handleSelectionChange}
                        select
                        SelectProps={{
                          multiple: true,
                          renderValue: (selected) => selected.join(", "), // To display selected values
                        }}
                        fullWidth
                      >
                        {options3.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
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
                        options={options4}
                        getOptionLabel={(option) => option.label}
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
                        sx={{
                          background:
                            "linear-gradient(to left, white 98%, red 2%)",
                        }}
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

export default AddAccount;
