import game, { getRandom } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const NOD = (x, y) => (!y ? x : NOD(y, x % y));

const getQuestionAndAnswer = () => {
  const num1 = getRandom(100);
  const num2 = getRandom(100);
  const isGCD = NOD(num1, num2);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(isGCD);
  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
