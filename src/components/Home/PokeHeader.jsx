import React from "react";

export default function PokeHeader({ wildPokemon, catchPokemon }) {
  return (
    <>
      <header>
        <h1 className="title">React Hooks</h1>
        <h3 className="subtitle">With Pokémon</h3>
      </header>
      <section className="wild-pokemon">
        <h2>Wild Encounter</h2>

        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            wildPokemon.id +
            ".png"
          }
          className="sprite"
          alt=""
        />
        <h3>{wildPokemon.name}</h3>
        <button className="catch-btn" onClick={() => catchPokemon(wildPokemon)}>
          CATCH
        </button>
      </section>
    </>
  );
}
