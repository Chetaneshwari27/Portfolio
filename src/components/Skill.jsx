import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const box = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100px",
  width:"200px",
  border: "1px solid black",
  borderRadius: "5px",
  boxShadow: "5px 10px",
  backgroundColor:"#6C9BCF"
}

const container = {
  marginTop: "50px",
  paddingRight: "50px",
  paddingLeft: "200px",
  gridGap: "2rem",
  paddingBottom: "50px",

}
const heading = {
  paddingLeft: "0"
}
export default function Skill() {

  const [userData, setData] = useState([])

  useEffect(() => {
    try {
      axios.request({
        url: 'http://localhost:3030/skills',
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
    <Box sx={{ marginTop: "50px" }}>
      <Typography variant='h4' sx={heading} align="center">
        My Skills
      </Typography>
      <Grid container spacing={2} sx={container}>
        {userData.map((skill) => (
          <Grid item key={skill} xs={12} sm={6} md={4} lg={3}>
            <Box sx={box}>
              <Typography variant="body1">{skill.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
