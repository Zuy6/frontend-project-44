import readlineSync from 'readline-sync';

export const getRandom = limit => Math.floor(Math.random() * limit);

const countRound = 3;

export default (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 0; i < countRound; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};
