import { useEffect, useState } from "react"
import './pokemons.css'

function Pokemons(){

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
const [search, setSearch] = useState('')
const [pokemon, setPokemon] = useState([])

const fetchPokemon = async () => {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  setPokemon(data.results)
}

const searcher = (e) => {
  setSearch(e.target.value)
}

const results = !search ? pokemon : pokemon.filter(poke => poke.name.toLowerCase().includes(search.toLowerCase()) )

useEffect(() => {
  fetchPokemon()
} , [])

const getPokemonId = (url) => {
  const urlParts = url.split('/')
  return urlParts[urlParts.length - 2]
}

return (
  <div><input value={search} onChange={searcher} type="text" placeholder="Enter a Pokemon name"/>

  <section className='pokemon-container'>
    {results.map((poke) => {
      return (
        <div key={getPokemonId(poke.url)} className="pokemon_card">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(poke.url)}.png`} alt="poke.url" />
          <h3>{poke.name.toUpperCase()}</h3>

        </div>
      )
    })}
  </section>
  </div>
);
    
}

export default Pokemons
