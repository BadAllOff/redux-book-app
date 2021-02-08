import React from "react";

const Checkbox = ({
  name = "",
  value = "",
  label = "",
  htmlFor = "",
  onChange,
  options = {},
}) => {
  return (
    <div className="form-group">
      <input
        type="checkbox"
        name={name}
        onChange={onChange}
        {...options}
      />
      <label htmlFor={htmlFor} className="form-check-label">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
