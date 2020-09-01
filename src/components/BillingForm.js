import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { object } from 'prop-types';
import { CardNumberElement, CardExpiryElement, CardCVCElement } from 'react-stripe-elements';
import withStripe from 'components/hocs/withStripe';
import usePayments from 'hooks/usePayments';
import Field from 'components/common/StripeField';
import { getBilling, getDonations, donate } from 'state/actions/billingActions';

import Button from './common/Button';

const BillingForm = ({ stripe, elements }) => {
  const [cardState, setCardState] = useState({});
  const [expiryState, setExpiryState] = useState({});
  const [CVCState, setCVCState] = useState({});
  const payments = useSelector(state => state.payments.payments);
  const creditCard = useSelector(state => state.payments.creditCard);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBilling());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getDonations());
  }, [dispatch]);

  const { createCreditCard: onSubmit } = usePayments(stripe, elements);

  const makeDonation = amount => {
    dispatch(donate(amount));
  };

  return (
    <div className="billing-container">
      <div className="new-card-form">
        <div className="new-card-form-section">
          <h4 className="new-card-form-section-title h4-medium">Billing</h4>
          <div className="new-card-form-row">
            <div className="half-row">
              <Field
                onChange={setCardState}
                label="Credit Card Info"
                StripeComponent={CardNumberElement}
                error={cardState.error}
              />
            </div>
            <div className="half-row">
              <Field
                onChange={setExpiryState}
                label="ExpiryDate"
                StripeComponent={CardExpiryElement}
                error={expiryState.error}
              />
              <Field
                onChange={setCVCState}
                label="CVC"
                StripeComponent={CardCVCElement}
                error={CVCState.error}
                width={13}
              />
            </div>
          </div>
        </div>
        <div className="new-card-form-section">
          <h4 className="new-card-form-section-title h4-medium">Billing Info (coming soon)</h4>
        </div>
        <div className="submit-container">
          <Button
            onClick={() => onSubmit({})}
            labelId="createPaymentMethod"
            type="primary"
            size="small"
          />
        </div>
      </div>
      <div className="payments">
        <h4> Existing Card </h4>
        {creditCard.brand} ending in {creditCard.last4}
        <p> Total payments: {payments.length} </p>
        <h4> Donate </h4>
        <Button onClick={() => makeDonation(1)} labelId="payment1" type="primary" size="small" />
        <Button onClick={() => makeDonation(100)} labelId="payment2" type="primary" size="small" />
      </div>
    </div>
  );
};

BillingForm.propTypes = {
  stripe: object,
  elements: object
};

export default withStripe(BillingForm);
