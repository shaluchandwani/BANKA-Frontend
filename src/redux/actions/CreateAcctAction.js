import { CREATE_BANK_ACCT } from './types';

const craeteBankAcctAction = (payload) => ({
  type: CREATE_BANK_ACCT,
  payload,
});

export default craeteBankAcctAction;
