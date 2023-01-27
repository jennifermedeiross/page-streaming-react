import FormAccess from 'components/FormAccess';
import { Link } from 'react-router-dom';
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

      </div>
    </div>
  )
}

export default Access;