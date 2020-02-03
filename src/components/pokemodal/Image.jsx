import React from "react";

export default function ImageModal({ card }) {
  return (
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
  );
}
