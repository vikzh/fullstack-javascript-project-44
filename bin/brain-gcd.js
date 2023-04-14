#! /usr/bin/env node
import runEngine from '../src/index.js';
import generateRound from '../src/games/gcd.js';


const rules = 'Find the greatest common divisor of given numbers.\n';

runEngine(generateRound, rules);
