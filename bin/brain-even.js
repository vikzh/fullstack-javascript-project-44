#! /usr/bin/env node
import runEngine from '../src/index.js';
import generateRound from '../src/games/even.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

runEngine(generateRound, rules);
