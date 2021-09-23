import React from 'react'
import PokemonsCards from './PokemonsCards';

function PokemonList({ pokemons }) {
    console.log(pokemons);

    return (
        <div className="row container mx-auto">
            {pokemons?.map(pokemon => (
                <PokemonsCards url={pokemon.url}
                />
            ))}
        </div>
    )
}

export default PokemonList;
