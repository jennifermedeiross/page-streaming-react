
import BodyAccess from 'components/BodyAccess';
import './Access.css'

const Access = () => {
  return (
    <div>
      <BodyAccess 
        pageType={'Sign In'} 
        call={'/register'} 
        legend={"Don't have an account? Register."} 
      />
    </div>
  )
}

export default Access;