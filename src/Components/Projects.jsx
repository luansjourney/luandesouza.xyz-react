import React from 'react'
import Card from './Card'
import logo from '../Assets/Images/logo.png';
import hpeSite from '../Assets/Images/hpe-site.png';
import sushiLoujo from '../Assets/Images/sushiloujo-site.png';
import personalWeb from '../Assets/Images/personal-website.png';


function Projects() {
  return (
    <div className='project-container' id="project">
      <h1>Portfolio</h1>
      <div className='container'>
        <Card image={hpeSite} title="Hewlett Packard Enterprise website" 
        modalTitle="Hewlett Packard Enterprise website" modalDescription="This was a project for a agency where I worked using Next.js, React.js, StyledComponents and SASS. We the frontend team had the task to move the html/css static site to a server side rendering project with Next.js"/>
        <Card image={sushiLoujo} title="Sushi Shop Website" />
        <Card image={personalWeb} title="Previous Website" />
        <Card image={logo} title="Logo" />
        <Card image={logo} title="Logo" />
        <Card image={logo} title="Logo" />
      </div>
    </div>
  )
}

export default Projects