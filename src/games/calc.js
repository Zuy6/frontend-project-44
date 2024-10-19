import game, { getRandom } from '../index.js';

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const operation = getRandom(1, 3);
  let result = 0;
  let mathOpr = '';
  switch (operation) {
    case 0: {
      result = num1 + num2;
      mathOpr = '+';
      break;
    }
    case 1: {
      result = num1 - num2;
      mathOpr = '-';
      break;
    }
    case 2: {
      result = num1 * num2;
      mathOpr = '*';
      break;
    }
    default: {
      result = 0;
      mathOpr = '';
    }
  }

  const question = `${num1} ${mathOpr} ${num2}`;
  const correctAnswer = String(result);

  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
