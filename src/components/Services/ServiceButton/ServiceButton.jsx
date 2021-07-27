import React from 'react'
import './ServiceButton.scss'

function ServiceButton(props) {
  return (
    <div className="service-button">
        <p>{props.text}</p>
    </div>
  );
}

export default ServiceButton
