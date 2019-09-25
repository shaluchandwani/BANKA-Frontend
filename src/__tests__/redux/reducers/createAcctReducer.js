import { CREATE_BANK_ACCT } from '../../../redux/actions/types';
import createAcctReducer from '../../../redux/reducers/createAcctReducer';

const initialState = {
  CreateAcct: {},
  errors: null,
};
describe('User reducers', () => {
  test('Bookmark TESTS', () => {
    const payload = {
      type: 'saving',
    };
    const reducer = createAcctReducer(initialState, {
      type: CREATE_BANK_ACCT,
      payload,
    });
  });
});
