import { useState } from 'react';

function App() {

  const [allPokemons, setAllPokemons] = useState([]);
  const [more, setMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  conts getPokemons = async => {
    const rest = await fetch(more);
  }

  return (
    <div className="app-container">
      <h1>Welcome to my Pokedex</h1>
      <div className="pokemon-container">
        <div className="all-container"></div>
      </div>
      <button className="more">Load More</button>
    </div>
  );
}

export default App;
