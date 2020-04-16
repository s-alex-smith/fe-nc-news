import React, { Component } from "react";
import * as api from "../utils";
import ErrorDisplay from "./ErrorDisplay";

class CommentForm extends Component {
  state = {
    commentInput: "",
    usernameInput: this.props.username,
    postError: null,
  };
  render() {
    const { usernameInput, commentInput, postError } = this.state;
    if (postError)
      return <ErrorDisplay status={postError.status} msg={postError.msg} />;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
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
    api
      .postComment(newComment, article_id)
      .then((comment) => {
        addComment(comment);
      })
      .catch((err) => {
        this.setState({
          postError: {
            status: err.response.status,
            msg: "missing required field",
          },
        });
      });

    this.setState({ commentInput: "", usernameInput: this.props.username });
  };
}

export default CommentForm;
