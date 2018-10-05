import React, { Component } from "react";
import "./show-posts.css";


class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showPosts() {
    const posts = this.state.posts.map(post => (
      <div className="a-post">
        <p className="message">{post.message}</p>
        <p className="author">Posted by {post.user_id}</p>
        <p className="date">Created on: {post.created_at}</p>
        <br></br>
      </div>
    ));
    return (
      <div>
        <ul>{posts}</ul>
      </div>
    );
  }

  handleSubmit(event) {
    const api_url = "https://acebook-eaglewithtophat.herokuapp.com/posts";
    fetch(api_url, {
      method: "GET"
    })
    .then(response => response.json())
    .then(data => this.setState({ posts: data }));
    event.preventDefault();
  }
  render() {
    return (
      <div className="show-posts">
        <form id="show-post-form" className="show-posts" name ="post_form" onSubmit={this.handleSubmit}>
          <label>
            <input type="submit" value="Show All Posts" />
          </label>
        </form>
          {this.showPosts()}
      </div>
    );
  }
}

export default Posts;
