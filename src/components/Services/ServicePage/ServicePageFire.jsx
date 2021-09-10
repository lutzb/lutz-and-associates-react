import React from 'react';
import './ServicePage.scss';
import ServiceButton from '../ServiceButton/ServiceButton'

function fireText() {
  return `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci sapien, eleifend vel nisl ac, congue placerat nulla. Maecenas tempor pretium lorem, et scelerisque diam facilisis et. Duis in diam sed erat viverra elementum. Maecenas iaculis, mauris sed convallis tempus, orci turpis aliquet orci, id porttitor mauris dui in risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque condimentum nisl erat, ac aliquet risus vestibulum ac. Sed velit justo, posuere vel mauris at, accumsan dignissim risus. Phasellus tincidunt urna sit amet mi mollis facilisis. In pharetra sollicitudin massa, in scelerisque lectus convallis vitae. Vivamus non urna felis. Donec fringilla hendrerit hendrerit.
  `
}

function ServicePageFire() {
  return (
    <div className="service-page">
      <header className="service-page-header">
        <h2>Fire Prevention</h2>
      </header>
      <div className="service-page-back">
        <div className='column'>
          <ServiceButton text='Back' route='/Services' />
        </div>
      </div>
      <div className='service-page-body'>
        <span className='service-page-text'>{fireText()}</span>
      </div>
    </div>
  );
}

export default ServicePageFire;
