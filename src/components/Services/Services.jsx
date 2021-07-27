import React from 'react';
import './Services.scss';

function servicesText1() {
  return `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci sapien, eleifend vel nisl ac, congue placerat nulla. Maecenas tempor pretium lorem, et scelerisque diam facilisis et. Duis in diam sed erat viverra elementum. Maecenas iaculis, mauris sed convallis tempus, orci turpis aliquet orci, id porttitor mauris dui in risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque condimentum nisl erat, ac aliquet risus vestibulum ac. Sed velit justo, posuere vel mauris at, accumsan dignissim risus. Phasellus tincidunt urna sit amet mi mollis facilisis. In pharetra sollicitudin massa, in scelerisque lectus convallis vitae. Vivamus non urna felis. Donec fringilla hendrerit hendrerit.
  `
}

function servicesText2() {
  return `
  Quisque ut felis fringilla, venenatis tellus nec, vulputate elit. In tempus consectetur euismod. Donec rutrum dapibus ligula at scelerisque. Aliquam convallis varius nunc, vitae fermentum metus lacinia sit amet. Morbi a nunc ullamcorper, congue est a, fringilla dui. Sed nec purus finibus, sollicitudin nunc eget, ultrices velit. Curabitur varius dictum mauris ac porta. Vestibulum at dignissim quam, vitae dictum ex. Etiam eget felis interdum, viverra lectus in, aliquet dolor. Sed non felis efficitur, euismod sapien vel, euismod augue. Nullam aliquam vestibulum dolor, ut aliquet elit. In in ligula ac mauris venenatis dignissim quis posuere nulla. Nam faucibus ullamcorper dui, molestie accumsan sem tristique nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi rhoncus at mauris eget viverra.
  `
}

function Services() {
  return (
    <div className="services">
      <header className="services-header">
        <h2>Consulting Services</h2>
      </header>
      <div className='services-body'>
        <span className='services-text'>{servicesText1()}</span>
        <br />
        <span className='services-text'>{servicesText2()}</span>
      </div>
    </div>
  );
}

export default Services;
