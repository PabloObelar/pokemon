import React, { useState, useEffect } from "react";
import Pokedex from "./components/Pokedex";
const App = () => {
  const [allPokemons, setPokemones] = useState([]);
  const [lodMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const response = await fetch(lodMore);
    const data = await response.json();

    setLoadMore(data.next);

    const objetoPokemon = (results) => {
      results.forEach(async (pokemon) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await response.json();

        setPokemones((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    };
    objetoPokemon(data.results);
    await console.log(allPokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="app-container">
      <img
        clasName="imgtitle"
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="Pokemon"
      />
      <div className="pokemon-container">
        <div className="all-containers">
          {allPokemons.map((pokemon, i) => (
            <Pokedex
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              type={pokemon.types[0].type.name}
              key={i}
            />
          ))}
        </div>
        <button className="load-more" onClick={() => getAllPokemons()}>
          Mas pokemones
        </button>
      </div>
    </div>
  );
};
export default App;
