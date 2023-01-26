import HeaderHome from '../../components/HeaderHome'

import './Home.css'

const Home = () => {
  return (
    <div>
      <HeaderHome page={'Contact'} url={'/contact'}/>
      <div className='home'>
        <h1>DevFlix</h1>
        <p>You don't have to leave the house to go to the movies, we'll take it to you!</p>
        <span></span>
      </div>
    </div>
      
  )
}

export default Home