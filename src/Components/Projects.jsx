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
        modalTitle="Hewlett Packard Enterprise website" 
        modalDescription="This was a project for an agency 'Insite Latin America' where I worked using: NextJS, ReactJS, StyledComponents and SASS. In the frontend team we had the task to move the html/css static site to a server side rendering project with NextJS. We as a team redesigned all the sections from the main website and all the sections in the site from plain html/css to React components"
         />
        <Card image={sushiLoujo} title="Sushi Restaurant Website" modalTitle="Sushi Restaurant Website" 
        modalDescription="This was a project for a local sushi restaurant. They wanted a simple webpage to be able to show their menu and share their contact information. The technology used was HTML/CSS and JavaScript vanilla also the design is responsive" />
        <Card image={personalWeb} title="Previous Website" />
        <Card image={logo} title="Logo" />
        <Card image={logo} title="Logo"/>
      </div>
    </div>
  )
}

export default Projects