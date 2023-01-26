import FormAcess from 'components/FormAcess';
import { Link } from 'react-router-dom';
import './Acess.css'

const Acess = () => {
  return (
    <div className='pageAcess'>
      <div className='acess-title'>
        <Link to='/'><h1>Devflix</h1></Link>
      </div>
      <div className='acess-form'>
        <FormAcess />
      </div>
    </div>
  )
}

export default Acess;