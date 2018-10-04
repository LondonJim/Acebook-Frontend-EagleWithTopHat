import React from "react";
import './signUp.css'

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
    this.handleSubmit = this.handleSubmit.bind(this); // binds 'this.handleSubmit' to this.SignUp
    };

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit(event) {
    const api_url = 'https://acebook-eaglewithtophat.herokuapp.com/users'
    fetch(api_url, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user : {
          full_name: this.state.fullName,
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.passwordConfirmation
        }
      })
    })
  }

  render() {
    return (
      <div className="signup-container">
        <h3 className="form-title">Sign-Up</h3>
        <form className="signUpForm" onSubmit={this.handleSubmit}>
          <div className="form-entry">
            <label for="fullName"> Full Name:</label>
              <input name="fullName" type="text" value={this.state.fullName} onChange={this.handleChange} />
          </div>
          <div className="form-entry">
            <label for="email">Email:</label>
              <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="form-entry">
            <label for="password">Password:</label>
              <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div className="form-entry">
            <label for="passwordConfirmation">Password Confirmation:</label>
              <input name="passwordConfirmation" type="password" value={this.state.passwordConfirmation} onChange={this.handleChange} />
          </div>
          <input id="submit-btn" name="submit" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default SignUp;
