import './Catalog.css'

import DataRequest from 'components/DataRequest';
import HeaderCatalog from 'components/HeaderCatalog';
import BannerPresentation from 'components/BannerPresentation';

const Catalog = () => {
  return (
    <div className='catalog'>
      <HeaderCatalog />
      <BannerPresentation />
      <DataRequest url={"movie/now_playing"} title={"In Theaters:"}/>
      <DataRequest url={"movie/top_rated"} title={"Top Rated:"}/>
      <DataRequest url={"movie/popular"} title={"Populars:"}/>
    </div>
  )
}

export default Catalog