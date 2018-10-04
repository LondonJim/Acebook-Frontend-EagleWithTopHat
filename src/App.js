import React, {Component} from "react";
import NavBar from './components/navBar'
import SignUp from './components/signUp'
import Posts from './components/posts'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SignUp />
        <Posts />
      </div>
    );
  }
}

export default App;
