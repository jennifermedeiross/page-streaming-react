import './CardsMovies.css';

import { AiFillStar, AiTwotoneCalendar} from 'react-icons/ai';

const CardsMovies = ({ movies }) => {
  return (
    <>
      {movies.length > 0 ?
        movies.map((movie) => (
        <article
          key={movie.id} 
          style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.poster_path}")`}}
        > 
          <div className='info-basic'>
            <p>
              {movie.title} <br/> <AiFillStar></AiFillStar> {movie.vote_average} | <AiTwotoneCalendar></AiTwotoneCalendar> {movie.release_date} 
            </p>
          </div>
        </article>)) : <p className='erro'>Not results</p>}
  </>
  )
}

export default CardsMovies