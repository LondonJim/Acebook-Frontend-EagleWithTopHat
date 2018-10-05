import React, {Component} from "react";
import NavBar from './components/navBar'
import SignUp from './components/signUp'
import SignIn from './components/signIn'
import Posts from './components/posts'
import AddPost from './components/addPost'

class App extends Component {
  render() {
    return (
      <div>
        <SignUp />
        <Posts />
      </div>
    );
  }
}

export default App;
