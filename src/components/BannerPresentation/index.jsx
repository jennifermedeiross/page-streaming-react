import './BannerPresentation.css';

import { AiFillStar } from 'react-icons/ai';

import { useEffect, useState } from 'react';

import api from 'services/api';

const BannerPresentation = () => {
  const [bannerMovie, setBannerMovie] = useState({});

  useEffect(() => {

    async function loadMovies() {
      const response = await api.get("movie/now_playing", {
        params:{
          api_key: "3d2aef7e99d7de4c813670a2c4201b76",
          language: "en-US",
          page: 1,
        }
      })
      const movie = response.data.results[0];
      setBannerMovie(movie);
      
    }
    loadMovies();

  }, [])

  console.log(bannerMovie)

  return (
    <div className='banner-presentation' 
      style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerMovie.backdrop_path}")`}}>
      <div className='banner-presentation-infos'>
        <h3 className='banner-presentation-title'>{bannerMovie.title}</h3>
        <p className='banner-presentation-stars'><AiFillStar></AiFillStar>{bannerMovie.vote_average}</p>
        <h4 className='banner-presentation-description'>{bannerMovie.overview}</h4>
      </div>
      <button className='banner-presentation-btn'>Watch new</button>
    </div>
  )
}

export default BannerPresentation;