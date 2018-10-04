import React from "react";
import './navBar.css';

class NavBar extends React.Component {
  render() {
    return (
        <div>
          <nav className="nav-bar">
            <a id="logo" href="/">A C E B O O K</a>
            <a className="nav-right" href="/sign-up">Sign up</a>
            <a className="nav-right" href="/sign-in">Sign in</a>
            <a className="nav-right" href="/sign-out">Sign out</a>
            <a className="nav-right" href="/post/new">New Post</a>
          </nav>
          <div className="content">

          </div>
        </div>
    );
  }
}

export default NavBar;
