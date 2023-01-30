import { Link } from 'react-router-dom'
import './HeaderHome.css'

const HeaderHome = ( { page, url } ) => {
  return (
    <header className='headerHome'>
      <nav>
        <Link to={url} className='link-page'>{page}</Link>
        <Link to='/access' className='buttonAcess'>Sign In</Link>
      </nav>
    </header>
  )
}

export default HeaderHome