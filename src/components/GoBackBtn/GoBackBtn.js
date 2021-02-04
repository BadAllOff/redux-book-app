import React from "react";
import { useHistory } from "react-router-dom";

const GoBackBtn = () => {
  let history = useHistory();

  return (
    <button className="btn btn-outline" onClick={history.goBack}>
      Go Back
    </button>
  );
};

export default GoBackBtn;
