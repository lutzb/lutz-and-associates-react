import React from 'react'
import './ServiceButton.scss'
import { Link } from "react-router-dom";

function ServiceButton(props) {
  return (
    <Link className='service-link' to={props.route}>
      <div className='service-button'>
        {props.text}
      </div>
    </Link>
  );
}

export default ServiceButton
