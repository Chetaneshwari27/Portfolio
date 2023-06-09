import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import Face3Icon from '@mui/icons-material/Face3';
import Hero from './Hero';
import About from './About';
import Skill from './Skill';
import Services from './Services';
import Contact from './Contact';

export default function Header() {

  const [currentTab, setCurrentTab] = useState(0)
  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue)
    const sections = document.getElementsByTagName('section');
    if (sections && sections.length > newValue) {
      sections[newValue].scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar variant='dense' style={{ background: "lightblue" }}>
          <Face3Icon style={{ color: "black" }} />
          <Typography variant='h6' style={{ color: "black", fontWeight: "bold", marginLeft: "auto" }} >
            <Tabs value={currentTab} onChange={handleTabChange}>
              <Tab label="Home"></Tab>
              <Tab label="About"></Tab>
              <Tab label="Skills"></Tab>
              <Tab label="Services"></Tab>
              <Tab label="Contact"></Tab>
            </Tabs>
          </Typography>
        </Toolbar>
      </AppBar>
      <section className="section">
        <Hero />
      </section>
      <section className="section">
        <About />
      </section>
      <section className="section">
        <Skill />
      </section>
      <section className="section">
        <Services />
      </section>
      <section className="section">
        <Contact />
      </section>
    </div>
  )
}