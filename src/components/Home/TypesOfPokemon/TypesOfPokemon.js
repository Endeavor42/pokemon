import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export default function TypesOfPokemon({ pokedex }) {
  const [ground, setGround] = useState(0);
  const [water, setWater] = useState(0);
  const [flying, setFlying] = useState(0);
  const [leaf, setLeaf] = useState(0);
  useEffect(() => {
    pokedex[0] &&
      setGround(
        pokedex
          .map(item => item.types[0].type.name)
          .filter(
            item =>
              item === "ground" ||
              item === "rock" ||
              item === "fire" ||
              item === "steel"
          ).length
      );
    pokedex[0] &&
      setWater(
        pokedex
          .map(item => item.types[0].type.name)
          .filter(item => item === "water" || item === "ice").length
      );
    pokedex[0] &&
      setFlying(
        pokedex
          .map(item => item.types[0].type.name)
          .filter(
            item => item === "flying" || item === "dragon" || item === "fairy"
          ).length
      );
    pokedex[0] &&
      setLeaf(
        pokedex
          .map(item => item.types[0].type.name)
          .filter(
            item => item === "grass" || item === "bug" || item === "poison"
          ).length
      );
    pokedex[0] && console.log(pokedex.map(item => item.types[0].type.name));
  }, [pokedex]);
  return (
    <div className="type-container">
      <Card className="ground box" style={{ width: "18rem" }}>
        <Card.Body className="header">
          <p className="h5">Ground</p>
        </Card.Body>
        <hr></hr>
        <Card.Body>
          <p className="h5"> {ground} </p>
        </Card.Body>
      </Card>
      <Card className="water box" style={{ width: "18rem" }}>
        <Card.Body className="header">
          <p className="h5">Water</p>
        </Card.Body>
        <hr></hr>
        <Card.Body>
          <p className="h5"> {water} </p>
        </Card.Body>
      </Card>
      <Card className="flying box" style={{ width: "18rem" }}>
        <Card.Body className="header">
          <p className="h5">Flying</p>
        </Card.Body>
        <hr></hr>
        <Card.Body>
          <p className="h5"> {flying} </p>
        </Card.Body>
      </Card>
      <Card className="leaf box" style={{ width: "18rem" }}>
        <Card.Body className="header">
          <p className="h5">Leaf</p>
        </Card.Body>
        <hr></hr>
        <Card.Body>
          <p className="h5"> {leaf} </p>
        </Card.Body>
      </Card>
    </div>
  );
}
