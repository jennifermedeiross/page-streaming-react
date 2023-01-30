import './Catalog.css'

import DataRequest from 'components/DataRequest';
import HeaderCatalog from 'components/HeaderCatalog';

const Catalog = () => {
  return (
    <div className='catalog'>
      <HeaderCatalog />
      <DataRequest url={"movie/now_playing"} title={"In Theaters:"}/>
    </div>
  )
}

export default Catalog