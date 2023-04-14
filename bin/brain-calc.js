#! /usr/bin/env node
import runEngine from '../src/index.js';
import generateRound from '../src/games/calc.js';

const rules = 'What is the result of the expression?';

runEngine(generateRound, rules);
