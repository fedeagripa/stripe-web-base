import { createReducer } from '@rootstrap/redux-tools';
import { getBilling, createCard, getDonations } from 'state/actions/billingActions';

const initialState = {
  loading: false,
  creditCard: {},
  payments: {}
};

const actionHandlers = {
  [getBilling.success]: (state, { payload }) => {
    state.creditCard = payload;
  },
  [createCard.success]: (state, { payload }) => {
    state.creditCard = payload;
  },
  [getDonations.success]: (state, { payload }) => {
    state.payments = payload;
  }
};

export default createReducer(initialState, actionHandlers);
