import './Catalog.css'
import api from 'services/api'

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

      console.log(response.data.results.slice(0, 10))
      setMovies(response.data.results.slice(0, 8));
    }

    loadMovies();

  }, [])

  return (
    
    <div className='movies'>
      <div className='presentation-list'>
        {movies.map((movie) => {
          return(
            <Link to={`/movie/${movie.id}`}>
              <article key={movie.id} 
                style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.poster_path}")`}}>
                <strong>{movie.title}</strong>
              </article>
            </Link>
          )
   
        })}
      </div>
    </div>
  )
}

export default Catalog;