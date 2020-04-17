import React, { Component } from "react";
import * as api from "../utils";
import ErrorDisplay from "./ErrorDisplay";

class Voter extends Component {
  state = {
    optimisticVotes: 0,
    votesError: null,
  };

  handleClick = (vote) => {
    this.setState((currentState) => {
      return {
        optimisticVotes: currentState.optimisticVotes + vote,
      };
    });
    api.patchVotes(vote, this.props.id, this.props.type).catch((err) => {
      this.setState({
        votesError: {
          status: err.response.status,
          msg: err.response.data.message,
        },
      });
    });
  };

  render() {
    const { optimisticVotes, votesError } = this.state;
    if (votesError)
      return <ErrorDisplay status={votesError.status} msg={votesError.msg} />;
    return (
      <div>
        <p>Votes: {this.props.votes + optimisticVotes}</p>
        <button
          className="btn btn-3"
          onClick={() => {
            this.handleClick(1);
          }}
          disabled={optimisticVotes > 0}
        >
          I love it!
        </button>
        <button
          className="btn btn-2"
          onClick={() => {
            this.handleClick(-1);
          }}
          disabled={optimisticVotes < 0}
        >
          Not for me.
        </button>
      </div>
    );
  }
}

export default Voter;
