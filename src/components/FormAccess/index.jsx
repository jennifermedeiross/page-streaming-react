import { useState } from 'react';
import './FormAccess.css'


const FormAccess = ( {pageType} ) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function handleLogin (e) {
    e.preventDefault();

    if(email !== '' && password !== ''){
      window.location('/catalog');
    } else {
      alert("Preencha todos os campos!")
    }
  }

  return (
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
          autoComplete={false}
          type={'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button type="submit">{pageType}</button>
      </form>
    </div>
  )
}

export default FormAccess;