import React, {Component} from "react";
// import ReactDOM from "react-dom";
import NavBar from './components/navBar'
import SignUp from './components/signUp'
// import SignIn from './components/signIn'
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SignUp />
 
      </div>
    );
  }
}

export default App;
