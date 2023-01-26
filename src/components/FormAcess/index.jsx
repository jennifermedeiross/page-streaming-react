import { useState } from 'react';
import './FormAcess.css'


const FormAcess = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='super-form-acess'>
      <form className='form-acess'>
        <label>E-mail</label>
        <input 
          type={'email'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <label>Password</label>
        <input
          autoComplete={false}
          type={'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default FormAcess;