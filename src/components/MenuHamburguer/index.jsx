import './MenuHamburguer.css';

import { AiOutlineMenu } from 'react-icons/ai';

const MenuHamburguer = () => {
  function handleToggle(){
    alert('menu-hamburguer')
  };

  return (
    <div className='menu-hamburguer'>
      <button onClick={(handleToggle)}>
        <AiOutlineMenu></AiOutlineMenu>
      </button>
    </div>
  )
}

export default MenuHamburguer;