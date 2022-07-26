import React from 'react';

function Card(props) {

  return (
    <div class="item">
        <img src={props.image} alt="logo" />
        <h3>{props.title}</h3>
    </div>
  )
}

export default Card