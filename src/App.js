import { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()

  useEffect(() => {
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results)
    })

    return () => cancel()

  }, [currentPageUrl])


  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  return (
    <>
      <PokemonList pokemon={pokemon}  />
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
      />
  </>
  );
}

export default App;
