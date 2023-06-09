import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { Person, Email, Phone } from '@mui/icons-material';
import CakeIcon from '@mui/icons-material/Cake';
import WavingHandIcon from '@mui/icons-material/WavingHand';


const About = () => {
  return (

    <Box py={5} sx={{ marginTop: "30px" }}>
      <Typography variant="h5" align="center" gutterBottom style={{fontFamily: 'Space Grotesk'}}>
        About Me
      </Typography>
      <Grid container spacing={4} justifyContent="center" style={{ paddingLeft: "80px", paddingRight: "80px", marginTop: "30px" }}>
        <Grid item xs={12} md={6} sx={{ paddingLeft: "80px" }}>
          <Paper elevation={18} sx={{ p: 3, height: '100%', paddingLeft: "80px", backgroundColor: "#6C9BCF" }}>
            <Typography variant="h6" gutterBottom sx={{ textDecoration: "underline" }}>
              Personal Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Person />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body1">Chetaneshwari Vyas</Typography>
              </Grid>
              <Grid item xs={2}>
                <Email />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body1">vyaschetaneshwari@example.com</Typography>
              </Grid>
              <Grid item xs={2}>
                <Phone />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body1">6789456324</Typography>
              </Grid>
              <Grid item xs={2}>
                <CakeIcon />
              </Grid>
              <Grid item xs={10}>
                <Typography variant='body1'>27/06/2000</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={18} sx={{ p: 3, height: '100%', backgroundColor: "#6C9BCF" }}>
            <Typography variant="h6" gutterBottom sx={{ textDecoration: "underline" }}>
            </Typography>
            <WavingHandIcon />
            <Typography variant="body1">
              Hi! My name is Chetaneshwari Vyas. I am a Web Developer, and I'm very passionate and dedicated to my work.I have acquired the skills and knowledge necessary to make your project a success.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
export default About;