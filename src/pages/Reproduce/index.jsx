import './Reproduce.css'

import { Link } from 'react-router-dom';

import { AiOutlineArrowLeft } from 'react-icons/ai'

const Reproduce = () => {
  return (
    <div className='reproduce'>
      <Link to='/movies'><AiOutlineArrowLeft></AiOutlineArrowLeft>To Back</Link>

      <video class="video" controls></video>
    </div>
  )
}

export default Reproduce;