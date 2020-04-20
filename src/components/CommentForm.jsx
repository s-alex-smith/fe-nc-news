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

    if (postError)
      return <ErrorDisplay status={postError.status} msg={postError.msg} />;
    return (
      <form onSubmit={this.handleSubmit} id="commentForm">
        <label className="comment">
          <textarea
            type="text"
            placeholder="have your say.."
            name="commentInput"
            value={commentInput}
            onChange={this.handleChange}
            required
          />
        </label>

        <button className="btn btn-3">Submit</button>
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
    if (commentInput.length === 0)
      return <ErrorDisplay status="404" msg="Missing required field" />;
    else {
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
    }

    this.setState({ commentInput: "" });
  };
}

export default CommentForm;
