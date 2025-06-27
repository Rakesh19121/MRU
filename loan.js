function interestRate(loanAmount, interestRate, years) {
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = years * 12;
  const monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
  return monthlyPayment;
}
function totalPayment(monthlyPayment, years) {
  const numberOfPayments = years * 12;
  return monthlyPayment * numberOfPayments;
}
function totalInterest(totalPayment, loanAmount) {
  return totalPayment - loanAmount;
}
function calculateLoanDetails(loanAmount, interestRate, years) {
  const monthlyPayment = interestRate(loanAmount, interestRate, years);
  const totalPay = totalPayment(monthlyPayment, years);
  const totalInt = totalInterest(totalPay, loanAmount);
  
  return {
    monthlyPayment: monthlyPayment.toFixed(2),
    totalPayment: totalPay.toFixed(2),
    totalInterest: totalInt.toFixed(2)
  };
}
module.exports = {
  interestRate,
    totalPayment,
    totalInterest,
    calculateLoanDetails
};