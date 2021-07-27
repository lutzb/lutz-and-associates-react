import React from 'react'
import './ServiceButtons.scss'
import ServiceButton from '../ServiceButton/ServiceButton'

function ServiceButtons() {
  return (
    <div className='service-buttons'>
      <div className='column'>
        <ServiceButton text='Service 1' />
        <ServiceButton text='Service 2 thingy' />
      </div>
      <div className='column'>
        <ServiceButton text='This is service 3' />
        <ServiceButton text='Another Service' />
      </div>
      <div className='column'>
        <ServiceButton text='A thing' />
        <ServiceButton text='The biggest service known' />
      </div>
    </div>
  );
}

export default ServiceButtons