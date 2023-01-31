import './MenuUser.css';
import { AiOutlineUser } from 'react-icons/ai';

const MenuUser = () => {

  return (
    <div className='menu-user'>
      <button onClick={(handleToggle) => {}}>
        <AiOutlineUser></AiOutlineUser>
      </button>
    </div>
  )
}

export default MenuUser;