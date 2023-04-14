#! /usr/bin/env node
import runEngine from '../src/index.js';
import generateRound from '../src/games/prime.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

runEngine(generateRound, rules);
