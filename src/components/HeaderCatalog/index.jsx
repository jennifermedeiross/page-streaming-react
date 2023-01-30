import './HeaderCatalog.css';

import { AiOutlineMenu, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineKeyboardArrowDown} from 'react-icons/md';

const HeaderCatalog = () => {
  return (
    <div className='header-catalog'>
      <AiOutlineMenu></AiOutlineMenu>
      <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
      
      <div className='header-end'>
        <div className='search'>
          <input type='text'/><AiOutlineSearch></AiOutlineSearch>
        </div>
        <AiOutlineUser></AiOutlineUser>
      </div>
    </div>
  )
}

export default HeaderCatalog;