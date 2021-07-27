import React from 'react';
import './ServicesPage.scss';

function fireText() {
  return `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci sapien, eleifend vel nisl ac, congue placerat nulla. Maecenas tempor pretium lorem, et scelerisque diam facilisis et. Duis in diam sed erat viverra elementum. Maecenas iaculis, mauris sed convallis tempus, orci turpis aliquet orci, id porttitor mauris dui in risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque condimentum nisl erat, ac aliquet risus vestibulum ac. Sed velit justo, posuere vel mauris at, accumsan dignissim risus. Phasellus tincidunt urna sit amet mi mollis facilisis. In pharetra sollicitudin massa, in scelerisque lectus convallis vitae. Vivamus non urna felis. Donec fringilla hendrerit hendrerit.
  `
}

function ServicePageFire() {
  return (
    <div className="services">
      <header className="services-header">
        <h2>F I R E</h2>
      </header>
      <div className='services-body'>
        <span className='services-text'>{fireText()}</span>
      </div>
    </div>
  );
}

export default ServicePageFire;
