import './MenuUser.css';
import { AiOutlineUser } from 'react-icons/ai';

const MenuUser = () => {
  function handleToggle(){
    alert('menu-user')
  };

  return (
    <div className='menu-user'>
      <button onClick={(handleToggle)}>
        <AiOutlineUser></AiOutlineUser>
      </button>
    </div>
  )
}

export default MenuUser;