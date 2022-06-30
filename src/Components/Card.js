import React from 'react'

function Card(props) {
  return (
    <div class="card-container">
    
        <div class="card-wrapper">
        
            <div class="card">
                
                <div class="card-image">
                    <img src={props.image} alt="profile one"/>
                </div>

                <ul class="social-icons">
                    <li>
                    <a href="/">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    </li>
                    <li>
                    <a href="/">
                        <i class="fab fa-instagram"></i>
                    </a>
                    </li>
                </ul>
                <div class="details">
                    <h2>John Smith
                    <br />
                    <span class="job-title">UI Developer</span>
                    </h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card