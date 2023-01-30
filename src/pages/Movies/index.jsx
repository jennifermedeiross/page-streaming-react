import CatalogMovies from 'components/CatalogMovies'
import HeaderCatalog from 'components/HeaderCatalog'
import BannerPresentation from 'components/BannerPresentation'

const Movies = () => {
  return (
    <div>
      <HeaderCatalog />
      <BannerPresentation />
      <CatalogMovies />
    </div>
  )
}

export default Movies