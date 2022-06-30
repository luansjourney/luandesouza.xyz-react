import React from 'react'
import Card from './Card'
import logo from '../Assets/Images/logo.png';


function Projects() {
  return (
    <div className='project-container'>
      <Card image={logo} />
      <Card  image={logo} />
      <Card  image={logo} />
      <Card  image={logo} />
    </div>
  )
}

export default Projects