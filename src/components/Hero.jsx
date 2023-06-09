import React, { useEffect, useState } from 'react'
import { Button, Container, Grid, Typography } from '@mui/material'
import axios from 'axios'

const container = {
  marginTop: "100px",
  marginLeft: "50px",
  marginRight: '50px',
  background: "darkgrey",
  marginBottom: "50px",
  backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20190828/pngtree-design-background-of-person-working-on-his-computer-in-top-view-image_307725.jpg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: "0",
  height: "400px",
  boxShadow: "3px 3px, -1em 0 .4em"
}

const column = {
  marginTop: "90px", marginBottom: "50px", color: "white"
}

const button = {
  backgroundColor: "ligthblue"
}

export default function Hero() {

  const [userData, setData] = useState([])

  useEffect(() => {
    try {
      axios.request({
        url: 'http://localhost:3030/hero',
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
  
    <Container sx={container}>
      {userData.map(data => {
        return (
          <Grid className='back' container spacing={2} alignItems="center">
            <Grid item xs={8} sm={6}>
              <img src='data:image/jpeg;base64,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'
                style={{ borderRadius: "50%", width: "30%", height: "40%", position: "relative", left: "50%" }}>
              </img>
            </Grid>
            <Grid item xs={18} sm={6} sx={column}>
              <Typography variant="h4" component="h4" sx={{ fontFamily: "Space Grotesk" }}>
                {data.title}
              </Typography>
              <Typography variant="h6" sx={{ fontFamily: "Space Grotesk" }}>
                {data.description}
              </Typography>
              <Button variant="contained" sx={button}>
                Explore more
              </Button>
            </Grid>
          </Grid>
        )})}
    </Container>
  )
}
