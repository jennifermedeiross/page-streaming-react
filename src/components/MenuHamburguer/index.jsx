import './MenuHamburguer.css';

import { AiOutlineMenu } from 'react-icons/ai';

const MenuHamburguer = () => {
  return (
    <div className='menu-hamburguer'>
      <button>
        <AiOutlineMenu></AiOutlineMenu>
      </button>
    </div>
  )
}

export default MenuHamburguer;