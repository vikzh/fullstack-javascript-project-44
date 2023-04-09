#! /usr/bin/env node
import askCliInput from '../src/cli.js';
import startGame from '../src/index.js';
import generateQuestionAndAnswer from '../src/progression.js';

console.log('Welcome to the Brain Games!');

const name = askCliInput('What is your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');

startGame(generateQuestionAndAnswer, name);
