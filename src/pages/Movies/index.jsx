import CatalogMovies from 'components/CatalogMovies'
import HeaderCatalog from 'components/HeaderCatalog'
import MoviePresentation from 'components/MoviePresentation'

const Movies = () => {
  return (
    <div>
      <HeaderCatalog />
      <MoviePresentation />
      <CatalogMovies />
    </div>
  )
}

export default Movies