import './BannerPresentation.css';

import { AiFillStar } from 'react-icons/ai';

const BannerPresentation = () => {
  return (
    <div className='banner-presentation'>
      <h3 className='banner-presentation-title'>Title</h3>
      <h4 className='banner-presentation-description'>Description</h4>
      <p className='banner-presentation-stars'><AiFillStar></AiFillStar></p>
      <button className='banner-presentation-btn'>Watch new</button>
    </div>
  )
}

export default BannerPresentation;