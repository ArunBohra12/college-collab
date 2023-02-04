import { FaEnvelope, FaGraduationCap, FaLock, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Input from '../../components/input/input';
import './signUp.css';

function SignUp() {
  return (
    <div className='signup'>
      <div className='signup-content'>
        <div className='signup-heading'>
          <h1>Sign Up</h1>
        </div>
        <form>
          <div className='signup-name-email-pass-div'>
            <FaUserAlt className='icons' />
            <Input
              otherInputAttributes={{
                type: 'text',
                placeholder: 'Name',
              }}
            />
          </div>
          <div className='signup-name-email-pass-div'>
            <FaUserAlt className='icons' />
            <Input
              otherInputAttributes={{
                type: 'text',
                placeholder: 'College Name',
              }}
            />
          </div>
          <div className='signup-name-email-pass-div'>
            <FaGraduationCap className='icons-college-email' />
            <Input
              otherInputAttributes={{
                type: 'email',
                placeholder: 'College Email Address',
              }}
            />
          </div>
          <div className='signup-name-email-pass-div'>
            <FaEnvelope className='icons' />
            <Input
              otherInputAttributes={{
                type: 'email',
                placeholder: 'Personal Email Address',
              }}
            />
          </div>
          <div className='signup-name-email-pass-div'>
            <FaLock className='icons' />
            <Input
              otherInputAttributes={{
                type: 'password',
                placeholder: 'Password',
              }}
            />
          </div>
          <div className='signup-name-email-pass-div'>
            <FaLock className='icons' />
            <Input
              otherInputAttributes={{
                type: 'password',
                placeholder: 'Confirm Password ?',
              }}
            />
          </div>
          <button type='submit' className='signup-button'>
            SignUp
          </button>
          <div className='option-login'>
            <Link to='/' className='option-login-text'>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
