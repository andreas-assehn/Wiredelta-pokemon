import React from 'react';

function PokemonCard({ poke }: any) {
  return (
    <>
      <div>PokemonCard</div>
      {poke ? <>{poke.name}</> : null}
    </>
  );
}

export default PokemonCard;
