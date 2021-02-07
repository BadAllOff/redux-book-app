import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Button";

const GoBackBtn = () => {
  let history = useHistory();

  return (
    <Button
      btnText="Go back"
      onClick={history.goBack}
      options={{ className: "btn btn-outline" }}
    />
  );
};

export default GoBackBtn;
