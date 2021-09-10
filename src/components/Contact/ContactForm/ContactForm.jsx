import React from 'react';
import './ContactForm.scss';

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { example: '' }
  }

  changeHandler = (event) => {
    this.setState({ example: event.target.value })
  }

  submitHandler = (event) => {
    event.preventDefault();
    alert("Submitted: " + this.state.example);
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className='contact-form'>
          <input type='text' onChange={this.changeHandler} />
          <input type='submit' />
        </div>
      </form>
    );
  }
}

export default ContactForm;
