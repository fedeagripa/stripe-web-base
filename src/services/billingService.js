import httpClient from 'httpClient';

class BillingService {
  static getBilling(customerId) {
    return httpClient.get(`/customer/${customerId}/credit_cards`);
  }

  static updateBilling(customerId, data) {
    return httpClient.put(`/customer/${customerId}/credit_cards`, data);
  }

  static saveBilling(customerId, token) {
    return httpClient.post(`/customer/${customerId}/credit_cards`, token);
  }
}

export default BillingService;
