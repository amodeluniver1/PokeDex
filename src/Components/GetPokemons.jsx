import { useEffect } from "react"

export const GetPokemons = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
    const fetchPokemon = async () => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }

    useEffect(() => {
        fetchPokemon()
    } , [])
}