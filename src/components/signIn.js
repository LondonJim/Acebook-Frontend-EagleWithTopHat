import React from "react";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      email:'',
      password:'',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit(event) {
    alert('User details: ' + this.state.email
                           + this.state.password )
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
          </label><br/>
          <label>
            Password:
            <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
          </label><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default SignIn;
