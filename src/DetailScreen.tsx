import React from 'react';
import { Pokemon } from 'pokenode-ts';
import { useLocation } from 'react-router-dom';

function DetailScreen() {
  const location = useLocation();
  const { state } = location;
  const { pokemon } = state;
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  return (
    <>
      <img src={image} alt={pokemon.name} />
      <div>{pokemon.name}</div>
    </>
  );
}

export default DetailScreen;
