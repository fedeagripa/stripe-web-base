import { createReducer } from '@rootstrap/redux-tools';
import { getBilling, createCard } from 'state/actions/billingActions';

const initialState = {
  loading: false,
  creditCard: {}
};

const actionHandlers = {
  [getBilling.success]: (state, { payload }) => {
    state.creditCard = payload;
  },
  [createCard.success]: (state, { payload }) => {
    state.creditCard = payload;
  }
};

export default createReducer(initialState, actionHandlers);
