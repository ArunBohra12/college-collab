/* eslint-disable @typescript-eslint/default-param-last */
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '../../utils/storage';
import authActionConstants from '../constants/authConstants';

const INITIAL_AUTH_STATE = getLocalStorage('user') || null;

type AuthReducerAction = {
  type: string;
  payload: { [key: string]: unknown };
};

/**
 * Reducer for the auth actions
 * @param state - The current state of the reducer.
 * @param {AuthReducerAction} action - AuthReducerAction
 * @returns The payload of the action.
 */
const authReducer = (state = INITIAL_AUTH_STATE, action: AuthReducerAction) => {
  const { type, payload } = action;

  switch (type) {
    case authActionConstants.SET_USER_DATA:
      setLocalStorage('user', JSON.stringify(payload));
      return payload;

    case authActionConstants.REMOVE_USER_DATA:
      removeLocalStorage('user');
      return INITIAL_AUTH_STATE;

    default:
      return state;
  }
};

export default authReducer;
