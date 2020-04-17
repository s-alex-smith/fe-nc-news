import React from "react";

const ErrorDisplay = ({ status, msg }) => {
  return (
    <div className="mainBody">
      <h3>OOOPS, SOMETHING WENT WRONG!</h3>
      <p>Status: {status || 500}</p>
      <p>Message: {msg || "Try again later"}</p>
    </div>
  );
};

export default ErrorDisplay;
