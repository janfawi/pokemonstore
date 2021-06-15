const PokemonItem = ({ pokemon, deletePokemon, ...props }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      {pokemon.name}
      <br />
      {props.pokeMaster}
      <button onClick={() => deletePokemon(pokemon)} type="button">
        DELETE!
      </button>
    </div>
  );
};
export default PokemonItem;
