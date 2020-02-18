import React, { useState, useEffect } from "react";
import axios from "axios";
// import PokeBerry from "./components/PokeBerry";
import { DataContext } from "./components/context/DataContext";
import { Spinner } from "react-bootstrap";
import NavbarComp from "./components/navbar/NavbarComp";
import PokeHeader from "./components/Home/PokeHeader";
import PokedexHome from "./components/Home/PokedexHome";
import CardFadeContainer from "./components/Home/CardF/CardFadeContainer";
import TypesOfPokemon from "./components/Home/TypesOfPokemon/TypesOfPokemon";
import SideDrawer from "./components/Home/SideDrawer";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  palette: {
    primary: red
  }
});

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [wildPokemon, setWildPokemon] = useState({});
  const [storeCard, setStoreCard] = useState({});
  const [disableSpinner, setDisableSpinner] = useState(true);
  const [ground, setGround] = useState(0);
  const [water, setWater] = useState(0);
  const [flying, setFlying] = useState(0);
  const [leaf, setLeaf] = useState(0);

  const capName = name => {
    name = name.charAt().toUpperCase() + name.slice(1);
    return name;
  };

  // const [wildBerry, setWildBerry] = useState({}); // ---

  useEffect(() => {
    encounterWildPokemon();
    // berries();
  }, []);

  const pokeId = () => {
    const min = Math.ceil(400);
    const max = Math.floor(480);
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

  useEffect(() => {
    setGround(ground + 1);
  }, [pokedex]);

  // JSX
  return loading ? (
    <>
      <DataContext.Provider
        value={{
          loading,
          setLoading,
          disableSpinner,
          setDisableSpinner
        }}
      >
        <NavbarComp />
        <MuiThemeProvider theme={theme}>
          <SideDrawer />
        </MuiThemeProvider>
      </DataContext.Provider>
      <div className="loading">
        {disableSpinner && <Spinner animation="grow" />}
      </div>
    </>
  ) : (
    <>
      {""}
      <DataContext.Provider
        value={{ loading, setLoading, disableSpinner, setDisableSpinner }}
      >
        <NavbarComp />
        <MuiThemeProvider theme={theme}>
          <SideDrawer />
        </MuiThemeProvider>
      </DataContext.Provider>
      <div className="app-wrapper container">
        <PokeHeader wildPokemon={wildPokemon} catchPokemon={catchPokemon} />
        {/* Pokedex */}
        <DataContext.Provider value={[storeCard, capName]}>
          <PokedexHome
            pokedex={pokedex}
            handleShow={handleShow}
            capName={capName}
            releasePokemon={releasePokemon}
            storeCard={storeCard}
            handleClose={handleClose}
            show={show}
          />
        </DataContext.Provider>
      </div>
      <div style={{ padding: "20px" }}></div>
      <CardFadeContainer />
      <div className="spacing outer">
        <TypesOfPokemon pokedex={pokedex} />
      </div>
    </>
  );
}

export default App;
