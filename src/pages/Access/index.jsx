import FormAccess from 'components/FormAccess';
import { Link } from 'react-router-dom';
import AutomaticAccess from '../../components/AutomaticAccess';
import './Access.css'

const Access = () => {
  return (
    <div className='access-page'>
      <div className='access-title'>
        <Link to='/'><h1>Devflix</h1></Link>
      </div>
      <div className='access-form'>
        <h2>Sign In</h2>
        <FormAccess />
        <AutomaticAccess />
        <Link to='/register'>Don't have an account? Register.</Link>
      </div>
    </div>
  )
}

export default Access;