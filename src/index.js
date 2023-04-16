/* eslint-disable no-continue */
import readlineSync from 'readline-sync';
import makeHello from './cli.js';

const roundsCount = 3;

const runEngine = (getQuestionAndAnswer, rules) => {
  const name = makeHello();
  console.log(`${rules}\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();

    console.log(`Question: ${question}\n`);
    const userAnswer = readlineSync.question('Your answer: ');

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

export default runEngine;
