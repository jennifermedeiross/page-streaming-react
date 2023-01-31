import './HeaderCatalog.css';

import { AiOutlineSearch} from 'react-icons/ai';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Logo from 'components/Logo';
import MenuHamburguer from 'components/MenuHamburguer';
import MenuUser from 'components/MenuUser';

const HeaderCatalog = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  }

  return (
    <header className='header-catalog'>
        <nav className='icons-header-catalog'>
          <MenuHamburguer />
          <Link to={'/movies'}><Logo /></Link>
          <div className='header-end'>
            <form onSubmit={handleSubmit}>
              <input 
                type='text' 
                placeholder='Search'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <button><AiOutlineSearch></AiOutlineSearch></button>
            </form>
            <MenuUser />
          </div>
        </nav>
    </header>
  )
}

export default HeaderCatalog;