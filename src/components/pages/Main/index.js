import React from "react";
import { Container } from "react-bootstrap";
import ContentList from "../../ContentList";
import Filter from "../../Filter";
import ChaptersCount from "../../ChaptersCount";
import Alert from "../../Alert";

const Main = () => {
  return (
    <>
      <Container>
        <h1>Amazing book title</h1>
        <hr />
        <Alert />
        <Filter />
        <ContentList />
        <ChaptersCount />
      </Container>
    </>
  );
};

export default Main;
