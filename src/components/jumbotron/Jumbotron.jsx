import React from "react";
import { Jumbotron, Container, Row } from "reactstrap";
import "./jumbotron.scss";
function CustomJumbotron(props) {
  return (
    <div>
      <Jumbotron id="jumbo" fluid>
        <Container fluid>
          <Row className="items-heading">{props.children}</Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default CustomJumbotron;
