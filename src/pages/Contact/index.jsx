import HeaderHome from 'components/HeaderHome';
import Socials from 'components/Socials';
import './Contact.css';

import Avatar from 'Assets/avatar.png'

const Contact = () => {
  return (
    <div>
      <HeaderHome page={'Home'} url={'/'}/>
      <div className='contact'>
        <Socials />
        <img src={Avatar} alt="Avatar" />
      </div>
    </div>
  )
}

export default Contact