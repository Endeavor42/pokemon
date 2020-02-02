import React from "react";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";

export default function Image({ card }) {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  );
  return (
    <>
      <img
        src={"https://img.pokemondb.net/sprites/items/master-ball.png"}
        alt=""
      />
      <OverlayTrigger trigger="click" placement="top" overlay={popover}>
        <Button variant="success">Click me to see</Button>
      </OverlayTrigger>
      <p>
        #{card.id} - {card.name}
      </p>
    </>
  );
}
