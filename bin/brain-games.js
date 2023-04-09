#! /usr/bin/env node
import askCliInput from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const name = askCliInput('May I have your name? ');
console.log(`Hello, ${name}!`);
