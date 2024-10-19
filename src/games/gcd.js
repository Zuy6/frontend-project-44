import game, { getRandom } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getNOD = (x, y) => (!y ? x : getNOD(y, x % y));

const getQuestionAndAnswer = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const isGCD = getNOD(num1, num2);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(isGCD);
  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
