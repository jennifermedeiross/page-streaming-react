import './CatalogMovies.css'

import api from 'services/api'

import { useEffect, useState } from 'react';
import BannerPresentation from 'components/BannerPresentation';

const CatalogMovies = () => {
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

      setMovies(response.data.results.slice(0, 7));
    }

    loadMovies();

  }, [])

  return (
    
    <div className='movies'>
      <BannerPresentation />
      <div className='presentation-list'>
        {movies.map((movie) => {
          return(
            <article key={movie.id} 
              style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.poster_path}")`}}>
              <strong>{movie.title}</strong>
            </article>
          )
   
        })}
      </div>
    </div>
  )
}

export default CatalogMovies;