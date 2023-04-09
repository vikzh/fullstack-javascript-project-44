#! /usr/bin/env node
import askCliInput from '../src/cli.js';
import startGame from '../src/index.js';
import generateQuestionAndAnswer from '../src/prime.js';

console.log('Welcome to the Brain Games!\n');

const name = askCliInput('May I have your name? ');
console.log(`Hello, ${name}!\n`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');

startGame(generateQuestionAndAnswer, name);
