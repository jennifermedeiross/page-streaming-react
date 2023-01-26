import { Link } from 'react-router-dom'
import './HeaderHome.css'

const HeaderHome = ( { page, url } ) => {
  return (
    <header className='headerHome'>
      <Link to={url} className='link-page'>{page}</Link>
      <Link to='/acess' className='acess'>Sign In</Link>
    </header>
  )
}

export default HeaderHome