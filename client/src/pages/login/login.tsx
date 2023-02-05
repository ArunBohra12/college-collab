import './login.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import Input from '../../components/input/input';

function Login() {
  return (
    <div className='login'>
      <div className='login-content'>
        <div className='login-heading'>
          <h1>LOGIN</h1>
        </div>
        <div className='login-inp-btn'>
          <div className='email-div'>
            <FaEnvelope className='icons' />
            <Input
              otherInputAttributes={{
                type: 'email',
                placeholder: 'Email Address',
              }}
            />
          </div>
          <div className='pass-div'>
            <FaLock className='icons' />
            <Input
              otherInputAttributes={{
                type: 'password',
                placeholder: 'Password',
              }}
            />
          </div>

          <button type='button' className='login-button'>
            {' '}
            Login{' '}
          </button>

          <div className='option'>
            <h3>Forgot Password | </h3>
            <h3 className='option-signup'> SignUp</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
