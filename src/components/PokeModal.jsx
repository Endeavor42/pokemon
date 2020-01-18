import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import uuid from "uuid";
import Combat from "./pokemodal/Combat";

export default function PokeModal({ reveal, close, card, retrieve }) {
  const { moves } = card;

  let storeMoves;

  useEffect(() => {}, []);

  // NOTES: we keep changing the state, which causes re-rendering
  if (card.id) {
    storeMoves = moves
      .filter((move, index) => index < 3)
      .map((move, index) => <li key={uuid()}>{move.move.name}</li>);

    // console.log(storeMoves);
  }

  return (
    <>
      <Modal show={reveal} size="lg" onHide={close} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <p>
              #{card.id} - {card.name}
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-container">
          <div className="item1">
            <img
              src={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                card.id +
                ".png"
              }
              className="sprite"
              alt=""
            />
          </div>
          <div className="item2">
            stats <Combat />
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
