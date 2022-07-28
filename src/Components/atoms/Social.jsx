import React from 'react'

function Social(props) {
  return (
    <div className='social-container'>
        <a href={props.link} rel='noreferrer noopener' target="_blank"><img src={props.image} alt={props.altText} /></a>
    </div>
  )
}

export default Social;