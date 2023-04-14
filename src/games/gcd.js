/* eslint-disable no-param-reassign */
import { getRandomInRange } from '../utils.js';

const gcd = (a, b) => {
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  return a;
};

const generateRound = () => {
  const [number1, number2] = [getRandomInRange(0, 100), getRandomInRange(0, 100)];

  const question = `${number1} ${number2}`;
  const answer = gcd(number1, number2);

  return [question, answer.toString()];
};

export default generateRound;
