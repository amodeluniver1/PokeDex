
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import PokemonCard from "./PokemonCard";
import './pokemons.css';

function Pokemons() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPokemon(data.results);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredPokemon = !search
    ? pokemon
    : pokemon.filter((poke) =>
        poke.name.toLowerCase().includes(search.toLowerCase())
      );

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div>
      <SearchBar search={search} onChange={handleSearch} />
      <section className="pokemon-container">
        {filteredPokemon.map((poke) => (
          <PokemonCard key={poke.name} name={poke.name} url={poke.url} />
        ))}
      </section>
    </div>
  );
}

export default Pokemons;
