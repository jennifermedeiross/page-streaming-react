import './AutomaticAccess.css';
import { BsFacebook, BsTwitter, BsGoogle } from 'react-icons/bs'

const AutomaticAccess = ( {pageType} ) => {

  return (
    <div className='automatic-access'>
      <button onClick={() => window.open('https://pt-br.facebook.com/login/device-based/regular/login/').focus}>
        <BsFacebook className='icon-access'></BsFacebook>
          {pageType} with Facebook
      </button>

      <button onClick={() => window.open('https://twitter.com/i/flow/login?   input_flow_data=%7B"requested_variant"%3A"eyJsYW5nIjoicHQifQ%3D%3D"%7D').focus}>
        <BsTwitter className='icon-access'></BsTwitter>
          {pageType} with Twitter
      </button>

      <button onClick={() => window.open('https://accounts.google.com/v3/signin/identifier?dsh=S-83098078%3A1675293330050787&hl=pt-br&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHcRxNNlkqpXlvSTPubpjCrYWhp2gOb8HjwWRwYDMibt_A7Vv0QSmtZaM6o9xpNOCXfr3VLl').focus}>
        <BsGoogle className='icon-access'></BsGoogle>
          {pageType} with Google
      </button>
    </div>
  )
}

export default AutomaticAccess