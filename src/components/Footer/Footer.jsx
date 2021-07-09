import React from 'react'
import './Footer.scss'
import LinkedInLogo from '../../img/LinkedIn-White-66px-TM.png'
import GitHubLogo from '../../img/GitHub-Mark-Light-64px.png'
import TwitterLogo from '../../img/Twitter_Social_Icon_Circle_White.svg'

const Footer = () => (
  <div className='footer'>
    <p>Lutz and Associates Consulting • Est. 2015 • Punta Gorda, FL 33950</p>
    <div>
      <a href='https://www.linkedin.com/in/jeffrey-g-lutz-a7ab9060/' target='_blank' rel='noopener noreferrer'>
        <img src={LinkedInLogo} className='social-logo' alt=''/>
      </a>
      <a href='https://www.linkedin.com/in/jeffrey-g-lutz-a7ab9060/' target='_blank' rel='noopener noreferrer'>
        <img src={LinkedInLogo} className='social-logo' alt=''/>
      </a>
      <a href='https://www.linkedin.com/in/jeffrey-g-lutz-a7ab9060/' target='_blank' rel='noopener noreferrer'>
        <img src={LinkedInLogo} className='social-logo' alt=''/>
      </a>
    </div>
  </div>
)

export default Footer
