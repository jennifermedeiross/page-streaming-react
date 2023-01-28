import './AutomaticAccess.css';
import { BsFacebook, BsTwitter, BsGoogle } from 'react-icons/bs'

const AutomaticAccess = () => {

  return (
    <div className='automatic-access'>
      <button><BsFacebook className='icon-access'></BsFacebook>Sign in with Facebook</button>
      <button><BsTwitter className='icon-access'></BsTwitter>Sign in with Twitter</button>
      <button><BsGoogle className='icon-access'></BsGoogle>Sign in with Google</button>
    </div>
  )
}

export default AutomaticAccess