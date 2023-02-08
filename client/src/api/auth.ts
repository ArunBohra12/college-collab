import { LoginParams, SignupParams, User } from '../types/authTypes';
import makeRequest from '../utils/request';

type LoginSignupResponse = {
  status: 'success' | 'fail';
  token: string;
  user: User;
};

/**
 * It takes email & password and makes the request to log the user in
 * @param {LoginParams}  - LoginParams - the type of the parameters that are passed to the function
 * @returns the data from the login request.
 */
export const login = async ({ email, password }: LoginParams) => {
  if (!email || !password) {
    alert('Please provide all the data');
    return;
  }

  const loginData = await makeRequest<LoginSignupResponse>('/api/v1/auth/login', {
    method: 'POST',
    data: {
      email,
      password,
    },
  });

  const data = await makeRequest<LoginSignupResponse>('/api/v1/auth/signup', {
    method: 'POST',
    data: loginData,
  });

  if (data instanceof Error) {
    throw new Error(data.message);
  }

  return data;
};

/**
 * It takes in a signupData object, validates it, and then makes a request to the server to signup
 * @param {SignupParams} signupData - SignupParams - This is the data that we will be sending to the
 * server.
 * @returns A promise that resolves to a LoginSignupResponse object.
 */
export const signup = async (signupData: SignupParams) => {
  const { name, collegeName, collegeEmail, personalEmail, password, passwordConfirm } = signupData;

  if (!name || !collegeName || !collegeEmail || !personalEmail || !password || !passwordConfirm) {
    alert('Please provide all the data');
    return;
  }

  if (password !== passwordConfirm) {
    alert('Password and confirm password fields do not match');
    return;
  }

  const data = await makeRequest<LoginSignupResponse>('/api/v1/auth/signup', {
    method: 'POST',
    data: signupData,
  });

  if (data instanceof Error) {
    throw new Error(data.message);
  }

  return data;
};
