import game, { getRandom } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const min = 1;
  const max = 9;
  const question = getRandom(min, max);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
