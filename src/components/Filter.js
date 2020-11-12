import React from "react";
import { connect } from "react-redux";
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

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) =>
    dispatch({
      type: "SET_FILTER",
      filter,
    }),
});

export default connect(null, mapDispatchToProps)(Filter);

const FilterButton = ({ onClick, children }) => {
  return (
    <Button variant="outline-dark" size="sm" onClick={onClick}>
      {children}
    </Button>
  );
};
