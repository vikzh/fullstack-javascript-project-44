#! /usr/bin/env node
import askCliInput from '../src/cli.js';
import startGame from '../src/index.js';
import generateQuestionAndAnswer from '../src/even.js';

console.log('Welcome to the Brain Games!');

const name = askCliInput('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

startGame(generateQuestionAndAnswer, name);
