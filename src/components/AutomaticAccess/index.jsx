import './AutomaticAccess.css';
import { BsFacebook, BsTwitter, BsGoogle } from 'react-icons/bs'

const AutomaticAccess = ( {pageType} ) => {

  return (
    <div className='automatic-access'>
      <button><BsFacebook className='icon-access'></BsFacebook>{pageType} with Facebook</button>
      <button><BsTwitter className='icon-access'></BsTwitter>{pageType} with Twitter</button>
      <button><BsGoogle className='icon-access'></BsGoogle>{pageType} with Google</button>
    </div>
  )
}

export default AutomaticAccess