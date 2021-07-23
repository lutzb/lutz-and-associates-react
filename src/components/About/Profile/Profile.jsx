import React from 'react'
import './Profile.scss'

class Profile extends React.Component {
  render() {
    return (
      <div className="profile-card">
        <div className='profile-image-container'>
          <img src={this.props.image} className='profile-image' alt=''></img>
        </div>
        <div className="profile-container">
          <span className='profile-name'>{this.props.name}</span>
          <span className='profile-role'>{this.props.role}</span>
          <span className='profile-text'>{this.props.text}</span>
        </div>
      </div>
    );
  }
}

export default Profile
