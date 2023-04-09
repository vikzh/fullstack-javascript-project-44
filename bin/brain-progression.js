#! /usr/bin/env node
import askCliInput from '../src/cli.js';
import startGame from '../src/index.js';
import generateQuestionAndAnswer from '../src/progression.js';

console.log('Welcome to the Brain Games!\n');

const name = askCliInput('May I have your name? ');
console.log(`Hello, ${name}!\n`);
console.log('What number is missing in the progression?\n');

startGame(generateQuestionAndAnswer, name);
