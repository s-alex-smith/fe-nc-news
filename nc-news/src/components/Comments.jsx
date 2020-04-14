import React, { Component } from "react";
import * as api from "../utils";
import CommentCard from "./CommentCard";
import Loader from "./Loader";

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <div>
        <ul>
          {comments.map((comment) => {
            return <CommentCard comment={comment} key={comment.comment_id} />;
          })}
        </ul>
        <form>
          <label>
            username:
            <input type="text" />
          </label>
          <label>
            Comment
            <input type="text" placeholder="have your say.." />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
  fetchComments = () => {
    const { article_id } = this.props;
    api.getComments({ article_id }).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  };
}

export default Comments;
