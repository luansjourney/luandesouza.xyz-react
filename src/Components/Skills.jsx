import React from 'react'
import TechBox from './atoms/TechBox';

//#region images import
import jsImg from '../Assets/Images/technologies/js.png';
import pythonImg from '../Assets/Images/technologies/python.png';
import csharpImg from '../Assets/Images/technologies/c-sharp.png';
import reactImg from '../Assets/Images/technologies/react.png';
import nextImg from '../Assets/Images/technologies/next-js-seeklogo.com.svg';
import dotNetImg from '../Assets/Images/technologies/dot-net-core-7.svg';
import fastapiImg from '../Assets/Images/technologies/fastapi-svgrepo-com.svg'
import sassImg from '../Assets/Images/technologies/sass.png';
import bsImg from '../Assets/Images/technologies/bootstrap-5-seeklogo.com.svg';
import adobeImg from '../Assets/Images/technologies/adobe.png';
import sqlServerImg from '../Assets/Images/technologies/microsoft-sql-server-seeklogo.com.svg';
import firebaseImg from '../Assets/Images/technologies/firebase.svg';
import bashImg from '../Assets/Images/technologies/bash-seeklogo.com.svg';
import powershellImg from '../Assets/Images/technologies/powershell.svg';
import azureImage from '../Assets/Images/technologies/icons8-azure.svg'
//#endregion

function Skills() {
  return (
        <section className='skills-container'>
        <h2>Skills</h2>
        <div className='content'>
          <div className='languages-container'>
            <h3>Languages</h3>
            <ul>
                <li><TechBox image={jsImg} imageAlt="Javascript logo" title="Javascript"/></li>
                <li><TechBox image={pythonImg} imageAlt="Python logo" title="Python"/></li>
                <li><TechBox image={csharpImg} imageAlt="CSharp logo" title="C#"/></li>
            </ul>
          </div>
          <div className='framework-container'>
            <h3>Frameworks</h3>
            <ul>
              <li><TechBox image={dotNetImg} imageAlt=".NET logo" title=".NET"/></li>
              <li><TechBox image={fastapiImg} imageAlt="FastAPI logo" title="FastAPI"/></li>
              <li><TechBox image={reactImg} imageAlt="React logo" title="React.js"/></li>
              <li><TechBox image={nextImg} imageAlt="Next logo" title="Next.js"/></li>
            </ul>
          </div>
          <div className='ft-container'>
            <h3>Web Tools</h3>
            <ul>
              <li><TechBox image={sassImg} imageAlt="Sass logo" title="Sass"/></li>
              <li><TechBox image={bsImg} imageAlt="Bootstrap logo" title="Bootstrap"/></li>
              <li><TechBox image={firebaseImg} imageAlt="Firebase logo" title="Firebase"/></li>
              <li><TechBox image={adobeImg} imageAlt="Adobe logo" title="Adobe Suite"/></li>
            </ul>
          </div>
          <div className='ot-container'>
            <h3>Other Tools</h3>
            <ul>
            <li><TechBox image={sqlServerImg} imageAlt="Microsoft SQL Server logo" title="SQL Server"/></li>
            <li><TechBox image={bashImg} imageAlt="Bash logo" title="Bash"/></li>
            <li><TechBox image={powershellImg} imageAlt="Powershell logo" title="Powershell"/></li>
            <li><TechBox image={azureImage} imageAlt="Azure logo" title="Azure"/></li>
            </ul>
          </div>
        </div>
</section>
  )
}

export default Skills;