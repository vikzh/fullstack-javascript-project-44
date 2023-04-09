#! /usr/bin/env node
import askCliInput from '../src/cli.js';
import startGame from '../src/index.js';
import generateQuestionAndAnswer from '../src/gcd.js';

console.log('Welcome to the Brain Games!');

const name = askCliInput('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

startGame(generateQuestionAndAnswer, name);
