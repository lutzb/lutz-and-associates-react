import React from 'react'
import './Profile.scss'

function Profile(props) {
  return (
    <div className="profile-card">
      <div>
        <img src={props.image} className='profile-image' alt=''></img>
      </div>
      <div className="profile-container">
        <span className='profile-name'>{props.name}</span>
        <span className='profile-role'>{props.role}</span>
        <span className='profile-text'>{props.text}</span>
      </div>
    </div>
  );
}

export default Profile
