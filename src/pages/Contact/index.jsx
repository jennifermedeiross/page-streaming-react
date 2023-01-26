import HeaderHome from '../../components/HeaderHome';
import Socials from '../../components/Socials';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <HeaderHome page={'Home'} url={'/'}/>
      <div>
        <Socials />
        <img src="" alt="Avatar" />
      </div>
    </div>
  )
}

export default Contact