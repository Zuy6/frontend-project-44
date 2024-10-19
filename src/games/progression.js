/* eslint-disable import/extensions */
import game, { getRandom } from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, step) => {
  const num = (start + (step * getRandom(1, 10)));
  let result = '';

  for (let i = 0; i < 10; i += 1) {
    if ((start + (step * i)) === num) {
      result += ' .. ';
    } else {
      result += ` ${(start + (step * i))} `;
    }
  }

  return [result, String(num)];
};

const getQuestionAndAnswer = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 4) + 1;

  return getProgression(num1, num2);
};

export default () => {
  game(description, getQuestionAndAnswer);
};
