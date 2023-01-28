import FormAccess from 'components/FormAccess';
import { Link } from 'react-router-dom';
import AutomaticAccess from 'components/AutomaticAccess';
import './BodyAccess.css'

const BodyAccess = ( { pageType, call, legend } ) => {
  return (
    <div>
      <div className='access-page'>
        <div className='access-title'>
          <Link to='/'><h1>Devflix</h1></Link>
        </div>
        <div className='access-form'>
         <h2>{pageType}</h2>
          <FormAccess pageType={pageType} />
          <AutomaticAccess pageType={pageType}/>
          <Link to={call}>{legend}</Link>
        </div>
      </div>
    </div>
  )
}

export default BodyAccess