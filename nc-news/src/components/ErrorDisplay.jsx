import React from "react";

const ErrorDisplay = ({ status, msg }) => {
  return (
    <div className="mainBody">
      <h3>OOOPS, SOMETHING WENT WRONG!</h3>
      <p>Status: {status}</p>
      <p>Message: {msg}</p>
    </div>
  );
};

export default ErrorDisplay;
