/* eslint-disable no-continue */
import askCliInput from './cli.js';

const makeGame = (getQuestionAndAnswer, name) => {
  const roundsToWin = 3;
  for (let i = 0; i < roundsToWin; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();

    console.log(`Question: ${question}\n`);
    const userAnswer = askCliInput('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!\n');
      continue;
    }

    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${name}!`);
    return;
  }

  console.log(`Congratulations, ${name}!\n`);
};

export default makeGame;
