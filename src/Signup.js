import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div className="form">
        <h3>Sign-up</h3>
        <form>
          <label for="name">Name:</label>
          <input type="text" name="name" required autofocus></input>
          <label for="email">Email:</label>
          <input type="email" name="email" required></input>
          <label for="password">Password:</label>
          <input type="password" name="password" required></input>
          <label for="passwordConfirmation">Confirm Password:</label>
          <input type="password" name="passwordConfirmation" required></input>
          <button type="submit">Sign-up</button>
        </form>
      </div>
    )
  }
  
}

export default Signup;