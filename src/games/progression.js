import game, { getRandom } from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (length, start, step) => {
  const progression = [];
  for (let i = start; progression.length < length; i += step) {
    progression.push(i);
  }
  return progression;
};

const getRandomIndex = (index) => getRandom(0, index.length - 1);

const getQuestionAndAnswer = () => {
  const minLength = 5;
  const maxLength = 10;
  const minRange = 1;
  const maxRange = 100;
  const minStep = 1;
  const maxStep = 10;
  const length = getRandom(minLength, maxLength);
  const start = getRandom(minRange, maxRange);
  const step = getRandom(minStep, maxStep);
  const progression = getProgression(length, start, step);
  const indexHiddenNumber = getRandomIndex(progression);
  const correctAnswer = progression[indexHiddenNumber].toString();
  progression[indexHiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
