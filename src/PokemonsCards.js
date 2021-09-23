import React from 'react'
import PokemonList from './PokemonList';
import useAPI from './hooks/useAPI';
import 'bootstrap/dist/css/bootstrap.css';


export const PokemonsCards = ({ url }) => {
    const pokemon = useAPI(url);

    if (!pokemon) return "Loading....";

    return (
        <div className="base col-8 col-lg-4 mx-auto">
            <div classname="wrapper row">
                <div className="card">
                    <div className="id">
                        <p>#0{pokemon.id}</p>
                    </div>
                    <div className="image">
                        <img className="card-img-top" src={pokemon.sprites?.other['official-artwork'].front_default} alt={pokemon.name} />                </div>
                    <div className="name">
                        <h3>{pokemon.name}</h3>
                    </div>
                    <div className="type">
                        <p>Type: {pokemon.types[0].type.name}</p>
                    </div>
                    <a href="#" class="btn btn-primary btn-sm">+</a>
                </div>
            </div>
        </div>
    )
}
export default PokemonsCards
