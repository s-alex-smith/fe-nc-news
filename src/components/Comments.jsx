import React, { Component } from "react";
import * as api from "../utils";
import CommentCard from "./CommentCard";
import Loader from "./Loader";
import CommentForm from "./CommentForm";
import ErrorDisplay from "./ErrorDisplay";

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
    commentError: null,
    deleteError: null,
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  render() {
    const { comments, isLoading, commentError } = this.state;
    const { article_id } = this.props;
    if (commentError)
      return (
        <ErrorDisplay status={commentError.status} msg={commentError.msg} />
      );
    if (isLoading) return <Loader />;
    return (
      <div className="commentCard">
        <ul>
          <CommentForm
            article_id={article_id}
            addComment={this.addComment}
            username={this.props.username}
          />
          {comments.map((comment) => {
            return (
              <CommentCard
                comment={comment}
                username={this.props.username}
                key={comment.comment_id}
                removeComment={this.removeComment}
                deleteError={this.state.deleteError}
              />
            );
          })}
        </ul>
      </div>
    );
  }
  fetchComments = () => {
    const { article_id } = this.props;
    api
      .getComments({ article_id })
      .then((comments) => {
        this.setState({ comments, isLoading: false });
      })
      .catch((err) => {
        this.setState({
          commentError: {
            status: err.response.status,
            msg: err.response.data.message,
          },
        });
      });
  };

  addComment = (newComment) => {
    this.setState(({ comments }) => {
      return { comments: [newComment, ...comments] };
    });
  };

  removeComment = (deletedComment_id) => {
    this.setState((currentState) => {
      return {
        comments: currentState.comments.filter(
          (comment) => comment.comment_id !== deletedComment_id
        ),
      };
    });
  };
}

export default Comments;
