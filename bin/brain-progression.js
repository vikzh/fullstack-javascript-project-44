#! /usr/bin/env node
import runEngine from '../src/index.js';
import generateRound from '../src/games/progression.js';

const rules = 'What number is missing in the progression?';

runEngine(generateRound, rules);
