import React from 'react'

export const PokemonsCards = ( {id, image, name, type} ) => {
    return (
        <div className="card-container">
            <div className="id">
                <p>#0{id}</p>
            </div>
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <div className="name">
                <h3>{name}</h3>
            </div>
            <div className="type">
                <p>Type: {type}</p>
            </div>
            
        </div>
    )
}
export default PokemonsCards
