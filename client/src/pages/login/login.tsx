import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';

import Input from '../../components/input/input';
import { login } from '../../api/auth';

import './login.css';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className='login'>
      <div className='login-content'>
        <div className='login-heading'>
          <h1>LOGIN</h1>
        </div>
        <form onSubmit={handleLogin} className='login-inp-btn'>
          <div className='email-div'>
            <FaEnvelope className='icons' />
            <Input
              otherInputAttributes={{
                type: 'email',
                placeholder: 'Email Address',
                value: email,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
              }}
            />
          </div>
          <div className='pass-div'>
            <FaLock className='icons' />
            <Input
              otherInputAttributes={{
                type: 'password',
                placeholder: 'Password',
                value: password,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
              }}
            />
          </div>

          <button type='submit' className='login-button'>
            Login
          </button>

          <div className='option'>
            <div>Forgot Password | </div>
            <Link to='/signup' className='option-signup'>
              SignUp
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
