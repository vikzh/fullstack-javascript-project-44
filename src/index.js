/* eslint-disable no-continue */
import readlineSync from 'readline-sync';

const roundsCount = 3;

const runEngine = (getQuestionAndAnswer, rules) => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
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
