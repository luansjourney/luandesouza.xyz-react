import React from 'react'
import TechBox from './atoms/TechBox';

//#region images import
import jsImg from '../Assets/Images/technologies/js.png';
import pythonImg from '../Assets/Images/technologies/python.png';
import csharpImg from '../Assets/Images/technologies/c-sharp.png';
import reactImg from '../Assets/Images/technologies/react.png';
import nextImg from '../Assets/Images/technologies/next-js-seeklogo.com.svg';
import dotNetImg from '../Assets/Images/technologies/dot-net-core-7.svg';
import htmlImg from '../Assets/Images/technologies/icons8-html-5.svg';
import cssImg from '../Assets/Images/technologies/css-3.png';
import sassImg from '../Assets/Images/technologies/sass.png';
import bsImg from '../Assets/Images/technologies/bootstrap-5-seeklogo.com.svg';
import grommetImg from '../Assets/Images/technologies/grommet-seeklogo.com.svg';
import styledComponentImg from '../Assets/Images/technologies/styled-components-1.svg';
import gitImg from '../Assets/Images/technologies/git-seeklogo.com.svg';
import githubImg from '../Assets/Images/technologies/github.png';
import adobeImg from '../Assets/Images/technologies/adobe.png';
import sqlServerImg from '../Assets/Images/technologies/microsoft-sql-server-seeklogo.com.svg';
import mongodbImg from '../Assets/Images/technologies/mongodb-seeklogo.com.svg';
import mysqlImg from '../Assets/Images/technologies/mysql.png';
import postgreeImg from '../Assets/Images/technologies/postgresql-seeklogo.com.svg';
import firebaseImg from '../Assets/Images/technologies/firebase.svg';
import bashImg from '../Assets/Images/technologies/bash-seeklogo.com.svg';
import powershellImg from '../Assets/Images/technologies/powershell.svg';
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
              <li><TechBox image={reactImg} imageAlt="React logo" title="React.js"/></li>
              <li><TechBox image={nextImg} imageAlt="Next logo" title="Next.js"/></li>
              <li><TechBox image={dotNetImg} imageAlt=".NET logo" title=".NET"/></li>
            </ul>
          </div>
          <div className='ft-container'>
            <h3>Frontend Tools</h3>
            <ul>
              <li><TechBox image={htmlImg} imageAlt="HTML5 logo" title="HTML"/></li>
              <li><TechBox image={cssImg} imageAlt="CSS3 logo" title="CSS"/></li>                    
              <li><TechBox image={sassImg} imageAlt="Sass logo" title="Sass"/></li>
              <li><TechBox image={bsImg} imageAlt="Bootstrap logo" title="Bootstrap"/></li>
              <li><TechBox image={grommetImg} imageAlt="Grommet logo" title="Grommet"/></li>
              <li><TechBox image={styledComponentImg} imageAlt="Styled Components logo" title="Styled Components"/></li>
              <li><TechBox image={adobeImg} imageAlt="Adobe logo" title="Adobe Suite"/></li>
            </ul>
          </div>
          <div className='ot-container'>
            <h3>Other Tools</h3>
            <ul>
            <li><TechBox image={gitImg} imageAlt="Git logo" title="Git"/></li>
            <li><TechBox image={githubImg} imageAlt="Github logo" title="Github"/></li>
            <li><TechBox image={sqlServerImg} imageAlt="Microsoft SQL Server logo" title="MS SQL Server"/></li>
            <li><TechBox image={mongodbImg} imageAlt="MongoDB logo" title="MongoDB"/></li>
            <li><TechBox image={mysqlImg} imageAlt="mySQL logo" title="mySQL"/></li>
            <li><TechBox image={postgreeImg} imageAlt="PostgreeSQL logo" title="PostgreeSQL"/></li>
            <li><TechBox image={firebaseImg} imageAlt="Firebase logo" title="Firebase"/></li>
            <li><TechBox image={bashImg} imageAlt="Bash logo" title="Bash"/></li>
            <li><TechBox image={powershellImg} imageAlt="Powershell logo" title="Powershell"/></li>
            </ul>
          </div>
        </div>
    </section>
  )
}

export default Skills;