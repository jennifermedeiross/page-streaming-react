import './Socials.css'

import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

const Socials = () => {

  function handleSocial () {
    return window.open('https://github.com/jennifermedeiross/').focus
  }

  return (
    <div className='social'>
      <div>
        <h2>Entre em contato!</h2>
      </div>
      <div className='icons-socials'>
        <BsInstagram onClick={handleSocial} className='icon-social'></BsInstagram>
        <BsGithub onClick={handleSocial} className='icon-social'></BsGithub>
        <BsLinkedin onClick={handleSocial} className='icon-social'></BsLinkedin>
      </div>
    </div>
  )
}

export default Socials;