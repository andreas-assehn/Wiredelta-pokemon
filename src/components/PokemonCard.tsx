import { Pokemon } from 'pokenode-ts';
import React from 'react';
import './PokemonCard.css';

function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  return (
    <div className='container'>
      <img src={image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <div className='info'>
        <p className='bold-text'>Height</p>
        <p>{pokemon.height}</p>
      </div>
      <div className='info'>
        <p className='bold-text'>Weight</p>
        <p>{pokemon.weight}</p>
      </div>

      {pokemon.abilities.map((ability: any, index: number) =>
        index === 0 ? (
          <div key={ability.ability.name} className='info'>
            <p className='bold-text'>Abilities</p>
            <p>{ability.ability.name}</p>
          </div>
        ) : (
          <p className='abilities' key={ability.ability.name}>
            {ability.ability.name}
          </p>
        )
      )}
    </div>
  );
}

export default PokemonCard;
