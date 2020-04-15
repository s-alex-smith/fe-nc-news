import React, { Component } from "react";
import * as api from "../utils";

class CommentForm extends Component {
  state = {
    commentInput: "",
    usernameInput: this.props.username,
  };
  render() {
    const { usernameInput, commentInput } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          username:
          <input
            type="text"
            name="usernameInput"
            value={usernameInput}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Comment:
          <input
            type="text"
            placeholder="have your say.."
            name="commentInput"
            value={commentInput}
            onChange={this.handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    );
  }
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { article_id, addComment } = this.props;
    const { usernameInput, commentInput } = this.state;
    const newComment = { username: usernameInput, body: commentInput };
    api.postComment(newComment, article_id).then((comment) => {
      addComment(comment);
    });
    this.setState({ commentInput: "", usernameInput: this.props.username });
  };
}

export default CommentForm;
