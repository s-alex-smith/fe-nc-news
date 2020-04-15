import React, { Component } from "react";
import * as api from "../utils";
import CommentCard from "./CommentCard";
import Loader from "./Loader";
import CommentForm from "./CommentForm";

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
    const { article_id } = this.props;
    if (isLoading) return <Loader />;
    return (
      <div>
        <ul>
          {comments.map((comment) => {
            return <CommentCard comment={comment} key={comment.comment_id} />;
          })}
        </ul>
        <CommentForm
          article_id={article_id}
          addComment={this.addComment}
          username={this.props.username}
        />
      </div>
    );
  }
  fetchComments = () => {
    const { article_id } = this.props;
    api.getComments({ article_id }).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  };

  addComment = (newComment) => {
    console.log(newComment);
    this.setState(({ comments }) => {
      return { comments: [...comments, newComment] };
    });
  };
}

export default Comments;
