
import React from "react";

function PokemonCard({ name, url }) {
  const getPokemonId = (url) => {
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 2];
  };

  const pokemonId = getPokemonId(url);

  return (
    <div className="pokemon_card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
        alt={name}
      />
      <h3>{name.toUpperCase()}</h3>
    </div>
  );
}

export default PokemonCard;
