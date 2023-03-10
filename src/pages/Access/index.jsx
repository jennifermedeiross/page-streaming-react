import { Link } from 'react-router-dom';
import { useState } from 'react';
import AutomaticAccess from 'components/AutomaticAccess';
import './Access.css'

const Access = ( ) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function handleLogin (e) {
    e.preventDefault();
    window.location('/catalog');
  }

  return (
    <div>
      <div className='access-page'>

        <div className='access-title'>
          <Link to='/'><h1>Devflix</h1></Link>
        </div>

        <div className='access-form'>
          <h2>Sign In</h2>

          {/* Form */}

          <div className='super-form-access'>

            <form className='form-access' onSubmit={handleLogin}>

              <label>E-mail</label>
              <input 
                type={'email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
              <label>Password</label>
              <input
                type={'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              
              <Link to={'/movies'}><button type="submit">Sign In</button></Link>

            </form>

          </div>

          {/* Form */}

          <AutomaticAccess pageType={'Sign In'}/>

          <Link to='/register'>Don't have an account? <i>Register.</i></Link>

        </div>
      </div>
    </div>
  )
}

export default Access;