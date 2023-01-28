import BodyAccess from "../../components/BodyAccess";

const Register = () => {
  return (
    <div>
      <BodyAccess 
        pageType={'Sign up'} 
        call={'/'} 
        legend={'Already have an account? Log in.'}
      />
    </div>
  )
}

export default Register;