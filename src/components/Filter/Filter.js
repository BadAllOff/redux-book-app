import React from "react";
import { Row, Container, Button } from "react-bootstrap";

const Filter = ({ setFilter }) => {
  return (
    <Container>
      <Row>
        <FilterButton
          onClick={() => {
            setFilter("SHOW_ALL");
          }}
        >
          Show all
        </FilterButton>
        <FilterButton
          onClick={() => {
            setFilter("SHOW_READY");
          }}
        >
          Show ready
        </FilterButton>
        <FilterButton
          onClick={() => {
            setFilter("SHOW_NOTREADY");
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
