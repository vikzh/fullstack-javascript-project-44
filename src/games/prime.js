import runEngine from '../index.js';
import { getRandomInRange } from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const generateRound = () => {
  const randomNumber = getRandomInRange(0, 100);

  const answer = isPrime(randomNumber) ? 'yes' : 'no';

  return [randomNumber.toString(), answer];
};

export default () => runEngine(generateRound, rules);
