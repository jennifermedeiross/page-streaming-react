import './HeaderCatalog.css';

import { AiOutlineMenu, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import TitleHome from 'components/TitleHome';
import Logo from 'components/Logo';

const HeaderCatalog = () => {
  return (
    <header className='header-catalog'>
        <div className='icons-header-catalog'>
          <AiOutlineMenu></AiOutlineMenu>
          <Logo />
          <div className='header-end'>
            <div className='search'>
              <input type='text'/><AiOutlineSearch></AiOutlineSearch>
            </div>
            <AiOutlineUser></AiOutlineUser>
          </div>
        </div>
    </header>
  )
}

export default HeaderCatalog;