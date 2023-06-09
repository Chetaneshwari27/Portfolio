import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React ,{useState, useEffect} from 'react';
import axios from "axios";

const container = {
  padding: "80px",
  marginRight:"50px"
}
const button = {
  paddingTop: "95px"
}

export default function Contact() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3030/contact", formData)
      .then(response => {
        console.log("Form submitted successfully!", response.data);
      })
      .catch(error => {
        console.error("Error submitting form:", error);
      });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: ""
    });
  };


  return (
    <Box>
      <Typography variant='h5' align='center' style={{ marginTop: "50px" }}>
        Contact Us
      </Typography>
      <Grid container spacing={1} sx={container}>
        <Grid xs={12} sm={6} item>
          <TextField label='First Name' placeholder='Enter First name' variant='outlined' fullWidth required></TextField>
        </Grid>
        <Grid xs={12} sm={6} item>
          <TextField label='Last Name' placeholder='Enter Last name' variant='outlined' fullWidth required></TextField>
        </Grid>
        <Grid xs={12} sm={6} item>
          <TextField label='Email' placeholder='Enter Email' variant='outlined' fullWidth required></TextField>
        </Grid>
        <Grid xs={12} sm={6} item>
          <TextField label='Phone Number' placeholder='Enter Phone number' variant='outlined' fullWidth></TextField>
        </Grid>
        <Grid xs={12} sm={6} item>
          <TextField label='Message' multiline rows={4} placeholder='Type your message here' variant='outlined' fullWidth></TextField>
        </Grid>
        <Grid sx={button}>
          <Button variant="contained" onClick={handleSubmit}>  
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
