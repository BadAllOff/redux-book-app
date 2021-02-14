import React from "react";

const Alert = ({ visibility = 'hide', message }) => {
  return <div className={`alert error ${visibility}`}>{message}</div>;
};

export default Alert;
