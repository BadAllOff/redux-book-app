import React from "react";

const FormGroup = ({ onSubmit, legend, submitBtnText='Submit', children }) => {
  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend>{legend}</legend>
        {children}
        <button className="btn btn-outline" type="submit">
          {submitBtnText}
        </button>
      </fieldset>
    </form>
  );
};

export default FormGroup;
