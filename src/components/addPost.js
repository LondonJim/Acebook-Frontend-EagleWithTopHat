import React from "react";

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      message:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    };

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit(event) {
    event.preventDefault();
    fetch('https://acebook-eaglewithtophat.herokuapp.com/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({message: this.state.message})
      // may need user_id?
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Post</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Message:
            <input name="message" type="text" value={this.state.message} onChange={this.handleChange} />
          </label><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddPost;
