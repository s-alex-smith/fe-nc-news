import React, { Component } from "react";
import * as api from "../utils";
import ErrorDisplay from "./ErrorDisplay";

class CommentForm extends Component {
  state = {
    commentInput: "",
    postError: null,
  };
  render() {
    const { commentInput, postError } = this.state;
    const { username } = this.props;
    if (postError)
      return <ErrorDisplay status={postError.status} msg={postError.msg} />;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="usernameInput"
            value={username}
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
    const { commentInput } = this.state;
    const newComment = { username: this.props.username, body: commentInput };
    api
      .postComment(newComment, article_id)
      .then((comment) => {
        addComment(comment);
      })
      .catch((err) => {
        this.setState({
          postError: {
            status: err.response.status,
            msg: err.response.data.message,
          },
        });
      });

    this.setState({ commentInput: "" });
  };
}

export default CommentForm;
