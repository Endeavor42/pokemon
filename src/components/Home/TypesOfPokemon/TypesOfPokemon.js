import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export default function TypesOfPokemon({ pokedex }) {
  const [ground, setGround] = useState(0);
  const [water, setWater] = useState(0);
  const [flying, setFlying] = useState(0);
  const [leaf, setLeaf] = useState(0);
  useEffect(() => {
    let g = pokedex
      .map(item => item.types[0].type.name)
      .filter(
        item =>
          item === "ground" ||
          item === "rock" ||
          item === "fire" ||
          item === "steel"
      );
    let w = pokedex
      .map(item => item.types[0].type.name)
      .filter(item => item === "water" || item === "ice");

    let f = pokedex
      .map(item => item.types[0].type.name)
      .filter(
        item => item === "flying" || item === "dragon" || item === "fairy"
      );
    let l = pokedex
      .map(item => item.types[0].type.name)
      .filter(item => item === "grass" || item === "bug" || item === "poison");
    pokedex[0] && setGround(g.length);
    pokedex[0] && setWater(w.length);
    pokedex[0] && setFlying(f.length);
    pokedex[0] && setLeaf(l.length);
    pokedex[0] && console.log(pokedex.map(item => item.types[0].type.name));
  }, [pokedex]);

  useEffect(() => {
    if (pokedex.length === 0) {
      // console.log("You have no pokemon");
      setGround(0);
      setWater(0);
      setFlying(0);
      setLeaf(0);
    }
  }, [pokedex]);
  return (
    <div className="type-container">
      <Card
        onMouseEnter={() => console.log(ground)}
        className="ground box"
        style={{ width: "18rem" }}
      >
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
