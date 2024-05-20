import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Createuser } from "../Api/service";

export const Create = () => {
 const initialState = {
          name: "",
          email: "",
          address: "",
          role: "",
          gender: ""
 }
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    address: "",
    role: "",
    gender: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSelectChange = (e) => {
    setFormValues({
      ...formValues,
      gender: e.target.value
    });
  };

  const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            const response = await Createuser(formValues);
            console.log(response);
            setFormValues(initialState)
          } catch (error) {
            console.error('There was an error!', error);
          }
        };
      
  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Create User
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              required
              id="outlined-basic-name"
              label="Name"
              variant="outlined"
              size="small"
              fullWidth
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              required
              id="outlined-basic-email"
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              required
              id="outlined-basic-address"
              label="Address"
              variant="outlined"
              size="small"
              fullWidth
              name="address"
              value={formValues.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              required
              id="outlined-basic-role"
              label="Role"
              variant="outlined"
              size="small"
              fullWidth
              name="role"
              value={formValues.role}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Gender"
                value={formValues.gender}
                onChange={handleSelectChange}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={1}>
            <Button variant="contained"  type="submit"fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
