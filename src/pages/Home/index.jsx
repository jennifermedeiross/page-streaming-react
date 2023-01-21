import HeaderHome from '../../components/HeaderHome'

import './Home.css'

const Home = () => {
  return (
    <div>
      <HeaderHome />
      <div className='home'>
        <h1>DevFlix</h1>
        <p>Você não precisa sair de casa para ir ao cinema, nós levamos até você!</p>
        <span></span>
      </div>
    </div>
      
  )
}

export default Home