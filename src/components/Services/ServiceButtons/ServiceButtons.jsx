import React from 'react'
import './HomeTiles.scss'
import HomeTile from '../HomeTile/HomeTile'
import FirePicture from '../../../img/fire.gif'

function ServiceButtons() {
  return (
    <div className='service-buttons'>
      <HomeTile image={FirePicture} header1='Text Example 1A' header2='Text Example 1B' text='Example paragraph text here. Explain things.' />
      <HomeTile image={FirePicture} header1='Text Example 1A' header2='Text Example 1B' text='Example paragraph text here. Explain things.' />
      <HomeTile image={FirePicture} header1='Text Example 1A' header2='Text Example 1B' text='Example paragraph text here. Explain things.' />
    </div>
  );
}

export default HomeTiles