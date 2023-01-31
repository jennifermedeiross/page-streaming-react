import './DataRequest.css';

import api from 'services/api';

import { useEffect, useState } from 'react';
import CardsMovies from 'components/CardsMovies';

const DataRequest = ({url, title}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    async function loadMovies() {
      const response = await api.get(`${url}`, {
        params:{
          api_key: "3d2aef7e99d7de4c813670a2c4201b76",
          language: "en-US",
          page: 1,
        }
      })
      
      setMovies(response.data.results.slice(0, 10));
    }

    loadMovies();

  }, [url])

  return (
    
    <div className='movies'>
      <h3>{title}</h3>
      <div className='presentation-list'>
        <CardsMovies movies={movies} />
      </div>
    </div>
  )
}

export default DataRequest