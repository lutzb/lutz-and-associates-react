import React from 'react'
import './ServiceButtons.scss'
import ServiceButton from '../ServiceButton/ServiceButton'

function ServiceButtons() {
  return (
    <div className='service-buttons'>
      <div className='column'>
        <ServiceButton text='Fire' route='/Services/Fire' />
        <ServiceButton text='Service 2 thingy' route='/Services/Fire' />
        <ServiceButton text='Service 2 thingy' route='/Services/Fire' />
        <ServiceButton text='Service 2 thingy' route='/Services/Fire' />
      </div>
      <div className='column'>
        <ServiceButton text='This is service 3' route='/Services/Fire' />
        <ServiceButton text='Another Service' route='/Services/Fire' />
        <ServiceButton text='Service 2 thingy' route='/Services/Fire' />
        <ServiceButton text='Service 2 thingy' route='/Services/Fire' />
      </div>
      <div className='column'>
        <ServiceButton text='A thing' route='/Services/Fire' />
        <ServiceButton text='The biggest service known to man' route='/Services/Fire' />
        <ServiceButton text='Service 2 thingy' route='/Services/Fire' />
        <ServiceButton text='Service 2 thingy' route='/Services/Fire' />
      </div>
    </div>
  );
}

export default ServiceButtons