import React from "react";
import './signUp.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      fullName:'',
      email:'',
      password:'',
      passwordConfirmation:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    };

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit(event) {
    event.preventDefault();
    fetch('https://acebook-eaglewithtophat.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user : {
        full_name: this.state.fullName,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation}})
    })
  }

  render() {
    return (
      <div className="signup-container">
      <h3 className="form-title"> Sign Up</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Full Name:
            <input name="fullName" type="text" value={this.state.fullName} onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <label>
            Password Confirmation:
            <input name="passwordConfirmation" type="password" value={this.state.passwordConfirmation} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default SignUp;
