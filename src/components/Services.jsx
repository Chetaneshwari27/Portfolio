import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import axios from 'axios';

const Services = () => {

  const [services, setData] = useState([])

  useEffect(() => {
    try {
      axios.request({
        url: 'http://localhost:3030/services',
        method: 'GET'
      }).then((response) => {
        console.log(response)
        setData(response.data)
      })
    } catch {
      console.log('Server not working')
    }
  }, [])

  return (
    <Box py={5}>
      <Typography variant="h5" align="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} style={{ paddingLeft: "90px", paddingRight: "80px", marginTop: "50px", gridGap: "2rem" }}>
            <Paper elevation={3} sx={{ p: 3, height: '100%', backgroundColor: "#6C9BCF" }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                {service.title}
              </Typography>
              <Typography variant="body1">{service.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;