import { SubmissionError } from 'redux-form/immutable';
import { createThunk } from '@rootstrap/redux-tools';
import billingService from 'services/billingService';
import parseError from 'utils/parseError';

import { getErrors } from 'utils/helpers';

export const getBilling = createThunk('GET_BILLING', async () => {
  try {
    const customerId = 1;
    const { data } = await billingService.getBilling(customerId);
    return data.creditCard;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const createCard = createThunk('CREATE_CARD', async ({ customerId, token, isUpdate }) => {
  try {
    const {
      id,
      email,
      card: {
        name,
        addressLine1,
        addressLine2,
        addressCity,
        addressState,
        addressCountry,
        addressZip,
        brand,
        last4
      }
    } = token;
    const tokenToSend = { id, email };
    const tokenToSave = {
      email,
      name,
      addressLine1,
      addressLine2,
      addressCity,
      addressState,
      addressCountry,
      addressZip,
      brand,
      last4
    };
    if (isUpdate) {
      await billingService.updateBilling(customerId, { token: tokenToSend, newCard: tokenToSave });
    } else {
      await billingService.saveBilling(customerId, { token: tokenToSend });
    }
  } catch ({ errors, error }) {
    throw new SubmissionError(getErrors(error, errors));
  }
});
