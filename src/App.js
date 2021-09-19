import { useState, useEffect } from 'react';

function App() {

  const [allPokemons, setAllPokemons] = useState([]);
  const [more, setMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getPokemons = async () => {
    const res = await fetch(more);
    const data = await res.json();

    setMore(data.next);
    console.log(data);
  }

useEffect (() => {
  getPokemons();
}, []);

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
