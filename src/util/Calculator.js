// Tools for debt sculpting calculator

export const moneyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  export function getDebtPayments(minDSCR, amortizationPeriod, principal, cashFlows) {
    
  }