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
        <NavBar />
        <h3> Sign Up </h3>
        <SignUp />

        <h3> All Posts </h3>
        <Posts />

        <h3> Sign In </h3>
        <SignIn />

        <h3> Add Post </h3>
        <AddPost />
      </div>
    );
  }
}

export default App;
