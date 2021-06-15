import { useState } from "react";
import oldPokemonList from "../data/pokemons";
import PokemonItem from "./PokemonItem";

const PokemonList = () => {
  const [query, setQuery] = useState("");
  const [pokemonList, setPokemonList] = useState(oldPokemonList);
  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  const deletePokemon = (pokemon) => {
    setPokemonList(pokemonList.filter((cv) => cv.id !== pokemon.id));
  };

  return (
    <div>
      <label>Search for pokemons</label>
      <input value={query} onChange={handleInput} />
      {pokemonList
        .filter((cv) => cv.name.toLowerCase().includes(query.toLowerCase()))
        .map((cv, i) => (
          <PokemonItem
            pokeMaster="Saleh"
            altPokeMaster="Mohammed"
            deletePokemon={deletePokemon}
            pokemon={cv}
            key={i}
          />
        ))}
    </div>
  );
};

export default PokemonList;
