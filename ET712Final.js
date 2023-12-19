console.log("number 13:");
function calculateMonthlyPayment(loanAmount, annualInterestRate, loanTermInYears) {
  if (loanAmount <= 0 || annualInterestRate <= 0 || loanTermInYears <= 0) {
    throw new Error("All parameters must be positive numbers");
  }

  const monthlyInterestRate = annualInterestRate / 100 / 12;
  const totalNumberOfPayments = loanTermInYears * 12;

  const monthlyPayment =
    (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -totalNumberOfPayments));

  return monthlyPayment.toFixed(2);
}

console.log("number 14:");
function calculateAverageScores(...studentScores) {
  const averages = [];

  for (const scores of studentScores) {
    if (scores.length === 0) {
      averages.push(null);
    } else {
      const sum = scores.reduce((acc, score) => acc + score, 0);
      const average = sum / scores.length;
      averages.push(average);
    }
  }

  return averages;
}

const stu1 = [90, 80, 80, 90, 85, 85];
const stu2 = [100, 90, 100, 90];
const stu3 = [60, 80, 100, 80];
const stu4 = [99, 99, 99];

const monthlyPayment = calculateMonthlyPayment(1000000, 1, 10);
console.log(`Monthly Mortgage Payment: $${monthlyPayment}`);

const averageScores = calculateAverageScores(stu1, stu2, stu3, stu4);
console.log("Average Scores:", averageScores);

console.log("number 15:");

