import game, { getRandom } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

function getQuestionAndAnswer() {
  const min = 1;
  const max = 9;
  const question = getRandom(min, max);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
}

export default () => {
  game(description, getQuestionAndAnswer);
};
