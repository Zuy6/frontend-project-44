import game, { getRandom } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getNOD = (x, y) => (!y ? x : getNOD(y, x % y));

const getQuestionAndAnswer = () => {
  const min = 1;
  const max = 100;
  const num1 = getRandom(min, max);
  const num2 = getRandom(min, max);
  const isGCD = getNOD(num1, num2);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(isGCD);
  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
