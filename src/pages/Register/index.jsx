import { Link } from 'react-router-dom';
import { useState } from 'react';
import AutomaticAccess from 'components/AutomaticAccess';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [checkbox, setCheckbox] = useState('');
  
  function handleLogin (e) {
    e.preventDefault();

    if(email !== '' && password !== ''){
      window.location('/catalog');
    } else {
      alert("Preencha todos os campos!")
    }
  }

  return (
    <div>
      <div className='access-page'>

        <div className='access-title'>
          <Link to='/'><h1>Devflix</h1></Link>
        </div>

        <div className='access-form'>
          <h2>Sign up</h2>

          {/* Form */}

          <div className='super-form-access'>

            <form className='form-access register' onSubmit={handleLogin}>

              <label>Fullname</label>
              <input 
                type={'text'}
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />

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
              <div className='checkbox'>
                <label>
                  <input 
                    type="checkbox"
                    value={checkbox}
                    onChange={(e) => setCheckbox(e.target.value)
                    }
                  />I agree to all the <i>Terms & Conditions.</i>
                </label>
              </div>
              
              <Link to={'/access'}><button type="submit">Sign up</button></Link>

            </form>

          </div>

          {/* Form */}

          <AutomaticAccess pageType={'Sign up'}/>

          <Link to='/access'>Already have an account? <i>Log in.</i></Link>

        </div>
      </div>
    </div>
  )
}

export default Register;