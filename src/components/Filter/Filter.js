import React from "react";

const Filter = ({ setFilter, currentFilter }) => {
  const status = {
    SHOW_ALL: "Show all",
    SHOW_READY: "Show ready",
    SHOW_NOTREADY: "Show not ready",
  };

  return (
    <fieldset>
      <legend>Subsections</legend>

      {Object.entries(status).map((key) => {
        return (
          <FilterButton
            key={key[0]}
            active={currentFilter === key[0] ? "active" : ""}
            onClick={() => {
              setFilter(key[0]);
            }}
          >
            {key[1]}
          </FilterButton>
        );
      })}
    </fieldset>
  );
};

const FilterButton = ({ onClick, children, active }) => {
  return (
    <button className={`btn btn-outline ${active}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Filter;
