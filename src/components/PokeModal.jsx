import React, { useState, useEffect, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import uuid from "uuid";
import Combat from "./pokemodal/Combat";
import { DataContext } from "./context/DataContext";

export default function PokeModal({ reveal, close, card }) {
  const { moves } = card;
  let [storeCard] = useContext(DataContext);

  let storeMoves;

  useEffect(() => {
    // statistics && console.log(storeCard);
  }, [storeCard]);

  // NOTES: we keep changing the state, which causes re-rendering
  if (card.id) {
    storeMoves = moves
      .filter((move, index) => index < 3)
      .map((move, index) => <li key={uuid()}>{move.move.name}</li>);
  }

  return (
    <>
      <Modal show={reveal} size="lg" onHide={close} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <img
              src={"https://img.pokemondb.net/sprites/items/master-ball.png"}
              alt=""
            />
            <p>
              #{card.id} - {card.name}
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-container">
          <div className="item1">
            <img
              src={
                "https://img.pokemondb.net/sprites/black-white/anim/normal/" +
                card.name +
                ".gif"
              }
              className="sprite"
              alt=""
            />
          </div>
          <div className="item2">
            <Combat />
          </div>
          <div className="item3">
            <p>Progressbar</p>
            <p>{storeMoves}</p>
          </div>
          <div className="item4">details</div>
          <div className="item5">profile-left</div>
          <div className="item6">profile-right</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={close}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// Use the id to fetch the image and data
