import React, { Component } from "react";
import * as api from "../utils";
import ErrorDisplay from "./ErrorDisplay";

class Deleter extends Component {
  handleClick = (comment_id) => {
    if (this.props.author === this.props.username) {
      api.deleteComment(comment_id).catch((err) => {
        if (this.props.deleteError)
          return (
            <ErrorDisplay
              status={this.props.deleteError.status}
              msg={this.props.deleteError.msg}
            />
          );
      });
      this.props.removeComment(comment_id);
    } else {
      alert("You are not authorised to delete this comment");
    }
  };

  render() {
    const { comment_id, author } = this.props;

    return (
      <div id="delete">
        <button
          className="btn btn-2"
          onClick={() => {
            this.handleClick(comment_id, author);
          }}
        >
          Delete comment
        </button>
      </div>
    );
  }
}

export default Deleter;
