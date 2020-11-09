import React from "react";
import { Row, Container, Button } from "react-bootstrap";

const Filter = ({ dispatch }) => {
  return (
    <Container>
      <Row>
        <FilterButton
          onClick={() => {
            dispatch({ type: "SET_FILTER", filter: "SHOW_ALL" });
          }}
        >
          Show all
        </FilterButton>
        <FilterButton
          onClick={() => {
            dispatch({ type: "SET_FILTER", filter: "SHOW_READY" });
          }}
        >
          Show ready
        </FilterButton>
        <FilterButton
          onClick={() => {
            dispatch({ type: "SET_FILTER", filter: "SHOW_NOTREADY" });
          }}
        >
          Show not ready
        </FilterButton>
      </Row>
    </Container>
  );
};

const FilterButton = ({ onClick, children }) => {
  return (
    <Button variant="outline-dark" size="sm" onClick={onClick}>
      {children}
    </Button>
  );
};

export default Filter;
