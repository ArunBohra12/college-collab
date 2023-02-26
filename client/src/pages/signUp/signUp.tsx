import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaEnvelope, FaGraduationCap, FaLock, FaUserAlt } from 'react-icons/fa';

import Input from '../../components/input/input';
import { signup } from '../../api/auth';
import { SignupParams } from '../../types/authTypes';
import { userSignupAction } from '../../redux/actions/authActions';

import './signUp.css';

function SignUp() {
  const dispatch = useDispatch();

  const [signupData, setSignupData] = useState<SignupParams>({
    name: '',
    collegeName: '',
    collegeEmail: '',
    personalEmail: '',
    password: '',
    passwordConfirm: '',
  });

  const handleInputChange = (field: string, value: string): void => {
    setSignupData((prevData) => {
      return { ...prevData, [field]: value };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = await signup(signupData);

    if (data?.status === 'fail') {
      alert("Something went wrong. Can't signup.");
      return;
    }

    if (!data) return;

    dispatch(userSignupAction({ token: data.token, user: data.user }));
  };

  return (
    <div className='signup'>
      <div className='signup-content'>
        <div className='signup-heading'>
          <h1>Sign Up</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='signup-name-email-pass-div'>
            <FaUserAlt className='icons' />
            <Input
              otherInputAttributes={{
                type: 'text',
                placeholder: 'Name',
                value: signupData.name,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('name', e.target.value),
              }}
            />
          </div>
          <div className='signup-name-email-pass-div'>
            <FaUserAlt className='icons' />
            <Input
              otherInputAttributes={{
                type: 'text',
                placeholder: 'College Name',
                value: signupData.collegeName,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('collegeName', e.target.value),
              }}
            />
          </div>
          <div className='signup-name-email-pass-div'>
            <FaGraduationCap className='icons-college-email' />
            <Input
              otherInputAttributes={{
                type: 'email',
                placeholder: 'College Email Address',
                value: signupData.collegeEmail,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('collegeEmail', e.target.value),
              }}
            />
          </div>
          <div className='signup-name-email-pass-div'>
            <FaEnvelope className='icons' />
            <Input
              otherInputAttributes={{
                type: 'email',
                placeholder: 'Personal Email Address',
                value: signupData.personalEmail,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange('personalEmail', e.target.value),
              }}
            />
          </div>
          <div className='signup-name-email-pass-div'>
            <FaLock className='icons' />
            <Input
              otherInputAttributes={{
                type: 'password',
                placeholder: 'Password',
                value: signupData.password,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('password', e.target.value),
              }}
            />
          </div>
          <div className='signup-name-email-pass-div'>
            <FaLock className='icons' />
            <Input
              otherInputAttributes={{
                type: 'password',
                placeholder: 'Confirm Password ?',
                value: signupData.passwordConfirm,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange('passwordConfirm', e.target.value),
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
