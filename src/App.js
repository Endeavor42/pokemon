import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeModal from "./components/PokeModal";
import PokeBerry from "./components/PokeBerry";
import { DataContext } from "./components/context/DataContext";
import { Spinner } from "react-bootstrap";

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [wildPokemon, setWildPokemon] = useState({});
  const [storeCard, setStoreCard] = useState({});
  const [increment, setIncrement] = useState(60);

  // const [wildBerry, setWildBerry] = useState({}); // ---

  useEffect(() => {
    encounterWildPokemon();
    // berries();
  }, []);

  const pokeId = () => {
    const min = Math.ceil(150);
    const max = Math.floor(200);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [loading, setLoading] = useState(true);

  const encounterWildPokemon = () => {
    setLoading(true);
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeId()}`)
      .then(response => {
        // response.data && console.log("Received the data");
        setWildPokemon(response.data);
        response.data && setLoading(false);
      });
  };

  //wildBerry.id && console.log(wildBerry); // MISTAKE: wildBerry is still true. Must be more specific, wildberry.id

  const catchPokemon = pokemon => {
    setPokedex(state => {
      const monExists = state.filter(p => pokemon.id === p.id).length > 0; // mostly false. Only true if you catch the same pokemon
      if (!monExists) {
        state = [...state, pokemon];
        state.sort(function(a, b) {
          return a.id - b.id;
        });
      }
      return state;
    });
    encounterWildPokemon(); // MISTAKE: we have to call this function whenever we're done
  };

  const releasePokemon = id => {
    setPokedex(state => state.filter(p => p.id !== id));
  };

  // PokeModal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = pokemon => {
    setShow(true);
    setStoreCard(pokemon);
    console.log("retrieved card");
  };

  // JSX
  return loading ? (
    <div className="loading">
      <Spinner animation="grow" />
    </div>
  ) : (
    <div className="app-wrapper container">
      {/* {console.log(wildPokemon)} */}
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

      {/* Pokedex */}
      <section className="pokedex">
        <h2>Pokédex</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
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
              <h3 className="pokemon-name">{pokemon.name}</h3>
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

          <DataContext.Provider value={[storeCard]}>
            <PokeModal close={handleClose} reveal={show} card={storeCard} />
          </DataContext.Provider>
        </div>
      </section>
      {/* <PokeBerry /> */}
    </div>
  );
}

export default App;
