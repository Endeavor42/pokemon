import React from "react";
import { Card } from "react-bootstrap";

export default function TypesOfPokemon() {
  return (
    <div className="type-container">
      <Card className="ground box" style={{ width: "18rem" }}>
        <Card.Body className="header">
          <p>Ground</p>
        </Card.Body>
        <hr></hr>
        <Card.Body>
          <p> 60 </p>
        </Card.Body>
      </Card>
      <Card className="water box" style={{ width: "18rem" }}>
        <Card.Body className="header">
          <p>Water</p>
        </Card.Body>
        <hr></hr>
        <Card.Body>
          <p> 60 </p>
        </Card.Body>
      </Card>
      <Card className="flying box" style={{ width: "18rem" }}>
        <Card.Body className="header">
          <p>Flying</p>
        </Card.Body>
        <hr></hr>
        <Card.Body>
          <p> 60 </p>
        </Card.Body>
      </Card>
      <Card className="leaf box" style={{ width: "18rem" }}>
        <Card.Body className="header">
          <p>Leaf</p>
        </Card.Body>
        <hr></hr>
        <Card.Body>
          <p> 60 </p>
        </Card.Body>
      </Card>
    </div>
  );
}
