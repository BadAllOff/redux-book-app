import React from "react";

const UndoBtn = ({undo}) => {
  return (
    <button
      className="btn btn-outline"
      onClick={() => {
        undo();
      }}
    >
      Undo
    </button>
  );
};

export default UndoBtn;