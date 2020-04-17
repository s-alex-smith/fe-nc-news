import React, { Component } from "react";
import * as api from "../utils";

class Voter extends Component {
  state = {
    optimisticVotes: 0,
  };

  handleClick = (vote) => {
    this.setState((currentState) => {
      return {
        optimisticVotes: currentState.optimisticVotes + vote,
      };
    });
    api.patchVotes(vote, this.props.id, this.props.type);
  };

  render() {
    const { optimisticVotes } = this.state;
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
