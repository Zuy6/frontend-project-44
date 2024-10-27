import game, { getRandom } from '../index.js';

const description = 'What is the result of the expression?';

const isCalc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return `Unexpected operator: ${operator}`;
  }
};

const getQuestionAndAnswer = () => {
  const min = 1;
  const max = 100;
  const minOperator = 0;
  const maxOperator = 3;
  const operators = ['+', '-', '*'];
  const operator = operators[getRandom(minOperator, maxOperator)];
  const num1 = getRandom(min, max);
  const num2 = getRandom(min, max);
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = isCalc(num1, num2, operator);
  return [question, String(correctAnswer)];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
