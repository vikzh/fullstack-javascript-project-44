#! /usr/bin/env node
import askCliInput from '../src/cli.js';

console.log('Welcome to the Brain Games!\n');

const name = askCliInput('May I have your name? \n');
console.log(`Hello, ${name}!`);
