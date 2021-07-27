import React from 'react'
import './HomeTile.scss'

function HomeTile(props) {
  return (
    <div className="column">
      <div className="card">
        <img src={props.image} className='card-image' alt=''></img>
        <div className="container">
          <h3>{props.header1}</h3>
          <h3>{props.header2}</h3>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeTile
