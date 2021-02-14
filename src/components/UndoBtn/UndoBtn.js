import React from "react";
import Button from "../Button";

const UndoBtn = ({ undo }) => {
  return (
    <Button
      btnText="Undo"
      onClick={() => {
        undo();
      }}
      options={{ className: "btn btn-outline" }}
    />
  );
};

export default UndoBtn;
