import { User } from '../../types/authTypes';
import authActionConstants from '../constants/authConstants';

export type UserSignupPayload = {
  token: string;
  user: User;
};

/**
 * It takes a payload, validates it and returns an object with a type of SET_USER_DATA and
 * the payload
 * @param {UserSignupPayload} payload - UserSignupPayload
 * @returns An object with a type and a payload.
 */
export const userSignupAction = (payload: UserSignupPayload) => {
  if (!payload || Object.keys(payload.user).length === 0) {
    throw new Error('Invalid payload provided at authActions.ts');
  }

  return {
    type: authActionConstants.SET_USER_DATA,
    payload,
  };
};
