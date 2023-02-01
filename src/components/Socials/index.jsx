import './Socials.css'

import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

const Socials = () => {

  return (
    <div className='social'>
      <div>
        <h2>Entre em contato!</h2>
      </div>
      <div className='icons-socials'>
        <BsInstagram onClick={() => window.open('https://www.instagram.com/jennifermedeiross/').focus} className='icon-social'></BsInstagram>
        <BsGithub onClick={() => window.open('https://github.com/jennifermedeiross').focus} className='icon-social'></BsGithub>
        <BsLinkedin onClick={() => window.open('https://www.linkedin.com/in/jennifermedeiross/').focus} className='icon-social'></BsLinkedin>
      </div>
    </div>
  )
}

export default Socials;