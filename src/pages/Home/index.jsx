import HeaderHome from '../../components/HeaderHome'
import TitleHome from '../../components/TitleHome'

import './Home.css'

const Home = () => {
  return (
    <div>
      <HeaderHome page={'Contact'} url={'/contact'}/>
      <div className='home'>
        <TitleHome />
      </div>
    </div>
      
  )
}

export default Home