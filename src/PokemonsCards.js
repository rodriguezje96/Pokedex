import React from 'react'
import PokemonList from './PokemonList';
import useAPI from './hooks/useAPI';

export const PokemonsCards = ({ url }) => {
    const pokemon = useAPI(url);

    if (!pokemon) return "Loading....";

    return (
        <div app-container>
            <div className="card-container row">
                <div className="id">
                    <p>#0{pokemon.id}</p>
                </div>
                <div className="image">
                    <img src={pokemon.sprites?.other['official-artwork'].front_default} alt={pokemon.name} />
                </div>
                <div className="name">
                    <h3>{pokemon.name}</h3>
                </div>
                <div className="type">
                    <p>Type: {pokemon.types[0].type.name}</p>
                </div>
            </div>
        </div>
    )
}
export default PokemonsCards
