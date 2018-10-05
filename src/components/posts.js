import React, { Component } from "react";

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
      <div>
        <p>User id: {post.user_id}</p>
        <p>Post content: {post.message}</p>
        <p>Created on: {post.created_at}</p>
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
      <div>
        <form name ="post_form" onSubmit={this.handleSubmit}>
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
