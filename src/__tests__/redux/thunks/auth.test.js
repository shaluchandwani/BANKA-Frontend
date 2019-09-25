import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import { postDataThunksignup, axiosInstance } from '../../../redux/thunks';
import signupUserAction from '../../../redux/actions/signup.actions';
import * as types from '../../../redux/actionTypes/actionTypes';

describe('auth actions', () => {
  let axiosMock;
  let store;
  const initialState = {
    signupSuccess: {},
    errors: null,
  };
  const userData = {
    firstName: 'shalu',
    lastName: 'chandwani',
    email: 'shalu@gmail.com',
    password: 'Shalu@1993',
    confirmPassword: 'Shalu@1993',
  };

  const empyFields = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  beforeEach(() => {
    axiosMock = new MockAdapter(axiosInstance);
    const mockStore = configureStore([thunk]);
    store = mockStore(initialState);
  });
  it('should signup user successfully', () => {
    const payload = { message: 'registered successfully' };
    axiosMock.onPost('v2/auth/signup').reply(201, payload);
    store
      .dispatch(postDataThunksignup('post', 'v2/auth/signup', signupUserAction, userData))
      .then(() => {
        expect(store.getActions()).toEqual([{
          type: types.SIGNUP_SUCCESS,
          payload,
        }]);
      });
  });
  it('should return error', () => {
    const payload = { message: 'registered successfully' };
    axiosMock.onPost('v2/auth/signup').reply(201, payload);
    store
      .dispatch(postDataThunksignup('post', 'v2/auth/signup', signupUserAction, userData))
      .then(() => {
        expect(store.getActions()).toEqual([{
          type: types.SIGNUP_SUCCESS,
          payload,
        }]);
      });
  });
  it('should return error', () => {
    const errors = { message: 'Fill all the fields' };
    axiosMock.onPost('v2/auth/signup').reply(404, errors);
    store
      .dispatch(postDataThunksignup('post', 'v2/auth/signup', signupUserAction, empyFields))
      .then(() => {
        expect(store.getActions()).toEqual([{
          type: types.SIGNUP_SUCCESS,
          errors,
        }]);
      });
  });
});
