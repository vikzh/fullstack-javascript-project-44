#! /usr/bin/env node
import askCliInput from '../src/cli.js';
import startGame from '../src/index.js';
import generateQuestionAndAnswer from '../src/prime.js';

console.log('Welcome to the Brain Games!');

const name = askCliInput('What is your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

startGame(generateQuestionAndAnswer, name);
