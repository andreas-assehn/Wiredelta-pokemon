import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import './SplashScreen.css';
import { APIResource, Pokemon } from 'pokenode-ts';

function SplashScreen() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [showAmount, setShowAmount] = useState(10);

  useEffect(() => {
    setPokemons([]);
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${showAmount}`)
      .then((res) => res.json())
      .then((data) =>
        data.results.forEach((pokemon: APIResource) =>
          fetch(pokemon.url)
            .then((res) => res.json())
            .then((pokemon: Pokemon) =>
              setPokemons((prevState: Pokemon[]) => [...prevState, pokemon])
            )
        )
      );
  }, [showAmount]);

  const handleAmount = (event: any) => {
    setShowAmount(Number(event.target.value));
  };

  return (
    <div>
      <header>
        <div className='header-content'>
          <select onChange={handleAmount}>
            {/* <option
              value='default'
              disabled
              selected
              hidden
            >{`Showing ${showAmount} results`}</option> */}
            <option value='10'>Show 10 results</option>
            <option value='20'>Show 20 results</option>
            <option value='50'>Show 50 results</option>
          </select>
          <div>Search bar</div>
          <div>Sort dropdown</div>
        </div>
      </header>
      <div className='wrapper'>
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
}

export default SplashScreen;
