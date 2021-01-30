import React from "react";
import { Row, Container, Button } from "react-bootstrap";

const Filter = ({ setFilter, currentFilter }) => {
  const status = {
    SHOW_ALL: "Show all",
    SHOW_READY: "Show ready",
    SHOW_NOTREADY: "Show not ready",
  };

  return (
    <Container>
      <Row>
        <fieldset className="border p-2">
          <legend className="w-auto">Subsections</legend>

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
      </Row>
    </Container>
  );
};

const FilterButton = ({ onClick, children, active }) => {
  return (
    <Button variant={`outline-dark ${active}`} size="sm" onClick={onClick}>
      {children}
    </Button>
  );
};

export default Filter;
