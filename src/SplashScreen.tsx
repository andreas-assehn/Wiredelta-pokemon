import React, { useEffect, useState } from 'react';
import PokemonCard from './components/PokemonCard';
import './SplashScreen.css';
import { APIResource, Pokemon } from 'pokenode-ts';
import PageChanger from './components/PageChanger';

function SplashScreen() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [showAmount, setShowAmount] = useState(10);
  const [page, setPage] = useState(0);
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    setPokemons([]);
    fetch(`${BASE_URL}/?offset=${page * showAmount}}&limit=${showAmount}`)
      .then((res) => res.json())
      .then((data) =>
        data.results.forEach((pokemon: APIResource) =>
          fetch(pokemon.url)
            .then((res) => res.json())
            .then((pokemon) =>
              setPokemons((prevState) => [...prevState, pokemon])
            )
        )
      );
  }, [showAmount, page]);

  const handleAmount = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setShowAmount(Number(event.target.value));
  };

  return (
    <div>
      <header>
        <div className='header-content'>
          <select className='dropdown' onChange={handleAmount}>
            <option value='10'>Show 10 results</option>
            <option value='20'>Show 20 results</option>
            <option value='50'>Show 50 results</option>
          </select>
          <input className='search' type='search' placeholder='Search'></input>
          <select className='dropdown'>
            <option value='A-Z'>From A-Z</option>
            <option value='Z-A'>From Z-A</option>
            <option value='height'>By Height</option>
            <option value='weight'>By Weight</option>
          </select>
        </div>
      </header>

      <PageChanger page={page} setPage={setPage} showAmount={showAmount} />

      <div className='wrapper'>
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>

      <PageChanger page={page} setPage={setPage} showAmount={showAmount} />
    </div>
  );
}

export default SplashScreen;
