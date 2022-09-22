import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';

function SplashScreen() {
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

  const [pokemons, setPokemons]: any[] = useState([]);

  function getAllPokemons() {
    const fetchedPokemons: any[] = [];
    fetch(`${BASE_URL}/?limit=100`)
      .then((res) => res.json())
      .then((pokemons) =>
        pokemons.results.forEach((pokemon: any) =>
          getPokemonDetails(pokemon, fetchedPokemons)
        )
      );
    setPokemons(fetchedPokemons);
  }

  function getPokemonDetails(pokemon: any, fetchedPokemons: any[]) {
    return fetch(pokemon.url)
      .then((res) => res.json())
      .then((pokemon) => fetchedPokemons.push(pokemon));
  }

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <>
      <h1>SplashScreen</h1>
      <PokemonCard poke={pokemons[0]} />
    </>
  );
}

export default SplashScreen;
