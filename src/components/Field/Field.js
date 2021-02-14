import React from "react";

const Field = ({
  name = "",
  label = "",
  hint = "",
  type = "text",
  options = {},
}) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input name={name} type={type} {...options} />
      <small className="text-muted form-text">{hint}</small>
    </div>
  );
};

export default Field;
