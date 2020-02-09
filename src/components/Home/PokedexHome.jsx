import React from "react";
import PokeModal from "../PokeModal";

export default function Pokedex({
  pokedex,
  handleShow,
  capName,
  releasePokemon,
  DataContext,
  storeCard,
  handleClose,
  show
}) {
  return (
    <section className="pokedex">
      <h2>Pokédex</h2>
      <p>Gotta catch 'em all</p>
      <div className="pokedex-list">
        {pokedex.map(pokemon => (
          <div
            className="pokemon"
            key={pokemon.id}
            onClick={() => handleShow(pokemon)}
          >
            <img
              src={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                pokemon.id +
                ".png"
              }
              className="sprite"
              alt=""
            />
            <h3 className="pokemon-name">{capName(pokemon.name)}</h3>
            <button
              className="remove"
              onClick={e => {
                releasePokemon(pokemon.id);
                e.stopPropagation();
              }}
            >
              &times;
            </button>
          </div>
        ))}

        <PokeModal close={handleClose} reveal={show} card={storeCard} />
      </div>
    </section>
  );
}
