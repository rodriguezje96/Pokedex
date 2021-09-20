import React from 'react'
import PokemonsCards from './PokemonsCards';

function PokemonList({ pokemons }) {
    console.log(pokemons);

    return (
        <div>
            {pokemons?.map(pokemon => (
                <PokemonsCards
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.sprites.other.dream_world.front_default}
                    type={pokemon.types[0].type.name}
                />
            ))}
        </div>
    )
}

export default PokemonList;
