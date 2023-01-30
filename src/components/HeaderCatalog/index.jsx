import './HeaderCatalog.css';

import { AiOutlineMenu, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import TitleHome from 'components/TitleHome';
import Logo from 'components/Logo';

const HeaderCatalog = () => {
  return (
    <header className='header-catalog'>
        <nav className='icons-header-catalog'>
          <AiOutlineMenu></AiOutlineMenu>
          <Logo />
          <div className='header-end'>
            <form>
              <input type='text' placeholder='Search'/>
              <button><AiOutlineSearch></AiOutlineSearch></button>
            </form>
            <AiOutlineUser></AiOutlineUser>
          </div>
        </nav>
    </header>
  )
}

export default HeaderCatalog;