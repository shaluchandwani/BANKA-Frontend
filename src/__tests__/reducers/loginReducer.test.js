import reducer from '../../redux/reducers/loginReducer';
import * as actionTypes from '../../redux/actions/types';

let userCredentials;

describe('Login reducer', () => {
  it('Should return the initial state', () => {
    expect(reducer({
      userCredentials: { },
    }, {
      type: actionTypes.LOGIN_USER,
      userCredentials: { user: { email: 'joe@gmail.com', password: 'Joe1234@' } },
    })).toEqual({ userCredentials });
  });
});
