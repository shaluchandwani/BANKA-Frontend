import { CREATE_BANK_ACCT } from '../actions/types';

export const initialState = {
  CreateAcct: {},
  errors: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_BANK_ACCT:
      return {
        ...state,
        CreateAcct: action.payload,
      };

    default:
      return state;
  }
}
