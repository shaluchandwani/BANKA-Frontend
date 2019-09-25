import signupUserAction from '../../../redux/actions/CreateAcctAction';
import { CREATE_BANK_ACCT } from '../../../redux/actions/types';

describe('actions', () => {
  it('should create an action to add a user', () => {
    const payload = {
      username: 'patrick',
      email: 'patrick@gmail.com',
      password: 'Patrick@123',
    };
    const expectedAction = {
      type: CREATE_BANK_ACCT,
      payload,
    };
    expect(signupUserAction(payload)).toEqual(expectedAction);
  });
});
