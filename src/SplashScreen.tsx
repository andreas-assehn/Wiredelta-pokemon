import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import './SplashScreen.css';
import { APIResource, Pokemon } from 'pokenode-ts';

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

  const prevPage = () => {
    setPage((prevState) => prevState - 1);
  };

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <div>
      <header>
        <div className='header-content'>
          <select onChange={handleAmount}>
            <option value='10'>Show 10 results</option>
            <option value='20'>Show 20 results</option>
            <option value='50'>Show 50 results</option>
          </select>
          <div>Search bar</div>
          <div>Sort dropdown</div>
        </div>
      </header>

      <div className='change-page'>
        {page < 1 ? (
          <p className='button-disabled'>Previous page</p>
        ) : (
          <button onClick={prevPage}>Previous page</button>
        )}
        <p>
          {page + 1} / {Math.ceil(1154 / showAmount)}
        </p>
        {page === Math.ceil(1154 / showAmount) ? (
          <p className='button-disabled'>Previous page</p>
        ) : (
          <button onClick={nextPage}>Next page</button>
        )}
      </div>

      <div className='wrapper'>
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>

      <div className='change-page'>
        {page < 1 ? (
          <p className='button-disabled'>Previous page</p>
        ) : (
          <button onClick={prevPage}>Previous page</button>
        )}
        <p>
          {page + 1} / {Math.ceil(1154 / showAmount)}
        </p>
        {page === Math.ceil(1154 / showAmount) ? (
          <p className='button-disabled'>Previous page</p>
        ) : (
          <button onClick={nextPage}>Next page</button>
        )}
      </div>
    </div>
  );
}

export default SplashScreen;
