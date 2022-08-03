import React from 'react'
import Card from './Card'


import logo from '../Assets/Images/logo.png';
import hpeSite from '../Assets/Images/hpe-site.png';
import sushiLoujo from '../Assets/Images/sushiloujo-site.png';
import personalWeb from '../Assets/Images/personal-website.png';
import todo from "../Assets/Images/to-do.png"


function Projects() {

  let cardList = [
    {
      image: hpeSite,
      title: "Hewlett Packard Enterprise website",
      modalTitle:"Hewlett Packard Enterprise website",
      modalDescription:"This was a project for an agency where I worked using: NextJS, ReactJS, StyledComponents and SASS. In the frontend team we had the task to move the html/css static site to a server side rendering project with NextJS. We as a team redesigned all the sections from the main website and all the sections in the site from plain html/css to React components",
      webLink: "https://education.hpe.com/ww/en/training/index.html",
      ghLink: null,
    },
    {
      image: todo,
      title: "To Do App",
      modalTitle:"Challenge: To Do App",
      modalDescription:"This is a to do app made for a challenge that it allows you to create a task with: Title, Description, Status, Priority. It was coded with React, Sass and Framer Motion also it stored the data in the localStorage",
      webLink: "https://luansjourney.github.io/challange-todo-app/",
      ghLink: "https://github.com/luansjourney/challange-todo-app",
    },
    {
      image: sushiLoujo,
      title: "Sushi Restaurant Website",
      modalTitle:"Sushi Restaurant Website",
      modalDescription:"This was a project for a local sushi restaurant. They wanted a simple webpage to be able to show their menu and share their contact information. The technology used was HTML/CSS and JavaScript vanilla also the design is responsive",
      webLink: "https://luansjourney.github.io/sushi-loujo/",
      ghLink: "https://github.com/luansjourney/sushi-loujo",
    },
    {
      image: personalWeb,
      title: "Previous Personal Website",
      modalTitle:"Personal Website",
      modalDescription:"This was my first project where I used plain HTML/CSS with responsive design to build a basic portfolio",
      webLink: "https://luansjourney.github.io/luandesouza.com/",
      ghLink: "https://github.com/luansjourney/luandesouza.com",
    },
    
  ]

  return (
    <section className='project-container' id="project">
      <h1>Portfolio</h1>
      <div className='container'>
        {
          cardList.map( (cardItem) => {
            return <Card image={cardItem.image} title={cardItem.title}
            modalTitle={cardItem.modalTitle}
            modalDescription={cardItem.modalDescription}
            webLink={cardItem.webLink}
            ghLink={cardItem.ghLink}
             />
          })

        }
       
      </div>
    </section>
  )
}

export default Projects