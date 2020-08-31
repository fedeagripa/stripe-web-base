import React from 'react';

import BillingForm from '../components/BillingForm';

const BillingPage = ({ creditCard, customerId }) => {
  return <BillingForm initialValues={creditCard} customerId={customerId} />;
};

export default BillingPage;
