import './Search.css';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import HeaderCatalog from 'components/HeaderCatalog';
import CardsMovies from 'components/CardsMovies';

const Search = () => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [movies, setMovies] = useState([]);
  const apiKey = '3d2aef7e99d7de4c813670a2c4201b76';

  useEffect(() =>{
    const fetchData = async () => {
      const response = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
      const data = await response.json();
      
      setMovies(data.results);
    }

    fetchData();
  }, [query]);

  return (
    <div>
      <HeaderCatalog />
      <div className='search-container'>
        <h2 className='search-title'>Results of <span>"{query}"</span>:</h2>
        <div className='presentation-list-search'>
          <CardsMovies movies={movies}/>
      </div>
      </div>
    </div>)
}

export default Search;