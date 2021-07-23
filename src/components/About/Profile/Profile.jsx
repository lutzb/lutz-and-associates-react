import React from 'react'
import './Profile.scss'

class Profile extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="profile-card">
          <img src={this.props.image} className='card-image' alt=''></img>
          <div className="profile-container">
            <p className='profile-name'>{this.props.name}</p>
            <p className='profile-role'>{this.props.role}</p>
            <p className='profile-text'>{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile
