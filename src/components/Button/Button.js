import React from "react";

const Button = ({ btnText = "", onClick, options = {} }) => {
  return (
    <button className="btn btn-outline" onClick={onClick} {...options}>
      {btnText}
    </button>
  );
};

export default Button;
