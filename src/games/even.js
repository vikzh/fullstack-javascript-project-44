import runEngine from '../index.js';
import { getRandomInRange } from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2) === 0;

const generateRound = () => {
  const question = getRandomInRange(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => runEngine(generateRound, rules);
