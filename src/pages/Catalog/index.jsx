import './Catalog.css'
import api from 'services/api'

import { useEffect, useState } from 'react';

const Catalog = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    async function loadMovies() {
      const response = await api.get("movie/now_playing", {
        params:{
          api_key: "3d2aef7e99d7de4c813670a2c4201b76",
          language: "pt-BR",
          page: 1,
        }
      })
      
      setMovies(response.data.results.slice(0, 10));
    }

    loadMovies();

  }, [])

  return (
    <div>
      <ul>
        {movies.map((movie) => {
          return(
            <div className='card-movie'>
                <li key={movie.id}>{movie.title}</li>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
            </div>
          )
   
        })}
      </ul>
    </div>
  )
}

export default Catalog;